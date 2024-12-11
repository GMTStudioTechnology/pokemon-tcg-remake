import React, { useState, useEffect, useCallback, useRef } from 'react';
import OpenPack from '../function/Open_pack';
import useSound from 'use-sound';
import pack_open from "../../audio/5.mp3";
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { toast } from 'react-hot-toast';
import back from "../../image/back.png"
const LOCAL_STORAGE_KEYS = {
    COLLECTION: 'ptcg_collection',
    STATS: 'ptcg_stats',
    SETTINGS: 'ptcg_settings'
};

const OpenPackUI = () => {
    const [cards, setCards] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [revealedCards, setRevealedCards] = useState([]);
    const packOpener = OpenPack();
    const [selectedCard, setSelectedCard] = useState(null);
    const [packShake, setPackShake] = useState(false);
    const [sparkles, setSparkles] = useState(false);
    const packControls = useAnimation();
    const [isPackVisible, setIsPackVisible] = useState(true);
    const [collection, setCollection] = useState(() => {
        const savedCollection = localStorage.getItem(LOCAL_STORAGE_KEYS.COLLECTION);
        return savedCollection ? JSON.parse(savedCollection) : {};
    });
    const [showCollection, setShowCollection] = useState(false);
    const [rarityFilter, setRarityFilter] = useState('all');
    const [sortOption, setSortOption] = useState('number');
    const [showStats, setShowStats] = useState(false);
    const [packStats, setPackStats] = useState(() => {
        const savedStats = localStorage.getItem(LOCAL_STORAGE_KEYS.STATS);
        return savedStats ? JSON.parse(savedStats) : {
            opened: 0,
            rarities: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0},
            types: {
                grass: 0,
                fire: 0,
                water: 0,
                electric: 0,
                fighting: 0,
                psychic: 0,
                colorless: 0
            }
        };
    });

    const isOpeningRef = useRef(false);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.COLLECTION, JSON.stringify(collection));
    }, [collection]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.STATS, JSON.stringify(packStats));
    }, [packStats]);

    const [playPackOpen, { stop: stopPackOpen }] = useSound(pack_open);

    const handlePackHover = async () => {
        if (!isAnimating) {
            setPackShake(true);
            await packControls.start({
                scale: [1, 1.05, 1],
                rotate: [0, -2, 2, -1, 0],
                transition: { duration: 0.5 }
            });
            setPackShake(false);
        }
    };

    const handleOpenPack = async () => {
        if (isOpeningRef.current) return;
        isOpeningRef.current = true;
        setIsAnimating(true);
        setIsPackVisible(false);
        stopPackOpen();
        playPackOpen();
        
        await packControls.start({
            scale: [1, 1.1, 0],
            rotate: [0, 5, -5, 0],
            y: [0, -50, 50],
            transition: { duration: 1.5 }
        });
        
        const newCards = packOpener.openNewPack();
        
        if (!newCards || !Array.isArray(newCards) || newCards.length === 0) {
            console.error('Failed to load cards');
            setIsAnimating(false);
            isOpeningRef.current = false;
            return;
        }

        setRevealedCards([]);
        setCards(newCards);
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsOpen(true);
        
        for (let i = 0; i < newCards.length; i++) {
            const delay = newCards[i].rarity >= 4 ? 1000 : 500;
            await new Promise(resolve => setTimeout(resolve, delay));
            setRevealedCards(prev => [...prev, i]);
        }
        
        handleAddToCollection(newCards);
        
        setTimeout(() => {
            setIsPackVisible(true);
            setIsAnimating(false);
            isOpeningRef.current = false;
        }, 2000);

        const hasRareCard = newCards.some(card => card.rarity >= 4);
        if (hasRareCard) {
            setSparkles(true);
            setTimeout(() => setSparkles(false), 3000);
        }

        setPackStats(prev => ({
            ...prev,
            opened: prev.opened + 1,
            rarities: newCards.reduce((acc, card) => {
                acc[card.rarity] = (acc[card.rarity] || 0) + 1;
                return acc;
            }, { ...prev.rarities }),
            types: newCards.reduce((acc, card) => {
                const type = card.type || 'colorless';
                acc[type] = (acc[type] || 0) + 1;
                return acc;
            }, { ...prev.types })
        }));
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    const handleAddToCollection = useCallback((newCards) => {
        console.log('=== Adding Cards to Collection ===');
        
        setCollection(prev => {
            const updated = { ...prev };
            
            newCards.forEach(card => {
                const cardKey = `${card.name}-${card.number}`;
                console.log(`Processing: ${cardKey}`);
                console.log('Current count:', updated[cardKey]?.count || 0);
                
                if (!updated[cardKey]) {
                    updated[cardKey] = {
                        ...card,
                        count: 1
                    };
                    console.log('Added new card with count 1');
                } else {
                    updated[cardKey].count += 1;
                    console.log('Incremented count to:', updated[cardKey].count);
                }
            });
            
            return updated;
        });
    }, []);

    const getSortedAndFilteredCollection = useCallback(() => {
        let filteredCards = Object.values(collection);

        if (rarityFilter !== 'all') {
            filteredCards = filteredCards.filter(card => card.rarity === parseInt(rarityFilter));
        }

        return filteredCards.sort((a, b) => {
            switch (sortOption) {
                case 'number':
                    return a.number - b.number;
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'rarity':
                    return b.rarity - a.rarity;
                default:
                    return 0;
            }
        });
    }, [collection, rarityFilter, sortOption]);

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset your collection? This cannot be undone.')) {
            setCollection({});
            setPackStats({
                opened: 0,
                rarities: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0},
                types: {
                    grass: 0,
                    fire: 0,
                    water: 0,
                    electric: 0,
                    fighting: 0,
                    psychic: 0,
                    colorless: 0
                }
            });
            setCards([]);
            setRevealedCards([]);
            setSelectedCard(null);
            setShowCollection(false);
            setShowStats(false);
            toast.success('Collection reset successfully!');
        }
    };

    const getTotalUniqueCards = useCallback(() => {
        return Object.keys(collection).length;
    }, [collection]);

    const renderCollectionView = () => (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowCollection(false)}
        >
            <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-[#2C2C2E] p-6 rounded-xl max-w-7xl w-full max-h-[85vh] overflow-hidden flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">Collection</h2>
                    <div className="flex items-center space-x-4">
                        <select 
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="bg-white/10 text-white p-2 rounded"
                        >
                            <option value="number">Number</option>
                            <option value="name">Name</option>
                            <option value="rarity">Rarity</option>
                        </select>
                        <select 
                            value={rarityFilter}
                            onChange={(e) => setRarityFilter(e.target.value)}
                            className="bg-white/10 text-white p-2 rounded"
                        >
                            <option value="all">All Rarities</option>
                            {[1,2,3,4,5,6,7,8].map(r => (
                                <option key={r} value={r}>{getRarityText(r)}</option>
                            ))}
                        </select>
                        <button 
                            onClick={() => setShowCollection(false)}
                            className="text-white/60 hover:text-white bg-white/10 p-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>

                <div className="overflow-y-auto flex-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {getSortedAndFilteredCollection().map((card) => (
                            <motion.div 
                                key={`${card.name}-${card.number}`}
                                whileHover={{ scale: 1.05 }}
                                className={`card-container cursor-pointer ${getRarityClass(card.rarity)} relative`}
                                onClick={() => handleCardClick(card)}
                            >
                                <img 
                                    src={card.image} 
                                    alt={card.name}
                                    className="w-full rounded-lg"
                                />
                                <div className="mt-2 text-center">
                                    <p className="text-white text-sm">{card.name}</p>
                                    <p className="text-white/60 text-xs">{getRarityText(card.rarity)}</p>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded-full text-sm font-bold">
                                    ×{card.count}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E] p-8">
            <div className="w-full max-w-7xl mb-8 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="bg-white/10 rounded-lg p-3">
                        <span className="text-white/80">Collection: {getTotalUniqueCards()} cards</span>
                    </div>
                    <button 
                        onClick={() => setShowStats(!showStats)}
                        className="bg-white/10 hover:bg-white/20 rounded-lg p-3 text-white/80"
                    >
                        Stats
                    </button>
                    <button 
                        onClick={handleReset}
                        className="bg-red-600/80 hover:bg-red-500/90 rounded-lg p-3 text-white"
                    >
                        Reset Game
                    </button>
                </div>
                
                <button 
                    onClick={() => setShowCollection(!showCollection)}
                    className="bg-purple-600/80 hover:bg-purple-500/90 rounded-lg p-3 text-white"
                >
                    View Collection
                </button>
            </div>

            <AnimatePresence>
                {showStats && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    >
                        <div className="bg-[#2C2C2E] p-6 rounded-xl max-w-md w-full">
                            <h2 className="text-2xl font-bold text-white mb-4">Pack Statistics</h2>
                            <div className="space-y-2">
                                <p className="text-white/80">Packs Opened: {packStats.opened}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(packStats.rarities).map(([rarity, count]) => (
                                        <div key={rarity} className="bg-white/5 p-2 rounded">
                                            <span className="text-white/60">Rarity {rarity}:</span>
                                            <span className="text-white ml-2">{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button 
                                onClick={() => setShowStats(false)}
                                className="mt-4 w-full bg-purple-600/80 hover:bg-purple-500/90 p-2 rounded text-white"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showCollection && (
                    renderCollectionView()
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isPackVisible && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative mb-12 z-10"
                    >
                        <motion.button 
                            onClick={handleOpenPack}
                            onMouseEnter={handlePackHover}
                            disabled={isAnimating}
                            className={`
                                px-16 py-6 
                                text-2xl font-bold text-white
                                bg-gradient-to-r from-purple-600/80 to-blue-600/80
                                hover:from-purple-500/90 hover:to-blue-500/90
                                rounded-2xl shadow-xl
                                transform transition-all duration-300
                                ${isAnimating ? 'animate-pulse' : 'hover:scale-105'}
                                disabled:cursor-not-allowed
                                backdrop-blur-xl
                                border border-white/20
                                relative overflow-hidden
                            `}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
                            
                            {isAnimating ? (
                                <div className="flex items-center space-x-3">
                                    <span>Opening Pack</span>
                                    <div className="w-6 h-6">
                                        <svg className="animate-spin" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                    </div>
                                </div>
                            ) : 'Open Pack'}
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {cards.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full max-w-8xl px-4"
                    >
                        {sparkles && (
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="sparkles" />
                            </div>
                        )}
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {cards.map((card, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                                    animate={revealedCards.includes(index) ? {
                                        opacity: 1,
                                        rotateY: 0,
                                        scale: 1,
                                        transition: {
                                            duration: 0.8,
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20
                                        }
                                    } : {}}
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    onClick={() => handleCardClick(card)}
                                    className={`
                                        card-container cursor-pointer
                                        ${getRarityClass(card?.rarity || 1)}
                                        hover:shadow-2xl hover:shadow-purple-500/20
                                        transition-shadow duration-300
                                    `}
                                >
                                    <div className="relative w-full pt-[140%]">
                                        <div className={`absolute inset-0 transition-transform duration-700 transform-gpu ${
                                            revealedCards.includes(index) ? 'rotateY-0' : 'rotateY-180'
                                        }`}>
                                            {/* Front of card (Pokémon) */}
                                            <div className={`absolute inset-0 backface-hidden ${
                                                revealedCards.includes(index) ? 'visible' : 'invisible'
                                            }`}>
                                                <img 
                                                    src={card?.image || '/images/default-card.png'} 
                                                    alt={card?.name || 'Card'}
                                                    className="w-full h-full object-cover rounded-2xl"
                                                />
                                            </div>
                                            
                                            {/* Back of card */}
                                            <div className={`absolute inset-0 backface-hidden rotateY-180 ${
                                                revealedCards.includes(index) ? 'invisible' : 'visible'
                                            }`}>
                                                <img 
                                                    src={back} 
                                                    alt="Card Back"
                                                    className="w-full h-full object-cover rounded-2xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedCard && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg bg-black/70"
                        onClick={closeModal}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-[#1C1C1E] rounded-2xl shadow-xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                                <div className="relative aspect-[2.5/3.5] rounded-xl overflow-hidden">
                                    <img 
                                        src={selectedCard.image} 
                                        alt={selectedCard.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>

                                <div className="text-white space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-2xl font-bold">{selectedCard.name}</h2>
                                        <button 
                                            onClick={closeModal}
                                            className="text-white/60 hover:text-white"
                                        >
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-white/80">HP: {selectedCard.hp}</p>
                                        <p className="text-white/80">Stage: {selectedCard.stage || 'Basic'}</p>
                                        <p className="text-white/80">Rarity: {getRarityText(selectedCard.rarity)}</p>
                                        <p className="text-white/80">Weakness: {selectedCard.weakness}</p>
                                        
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/80">Retreat Cost:</span>
                                            {selectedCard.retreatCost.map((cost, index) => (
                                                <span key={index} className="px-2 py-1 bg-white/10 rounded">
                                                    {cost.amount} {cost.type}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-lg font-semibold">Attacks</h3>
                                            {selectedCard.attacks.map((attack, index) => (
                                                <div key={index} className="bg-white/5 rounded-lg p-4">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-medium">{attack.name}</h4>
                                                        <span>{attack.score} damage</span>
                                                    </div>
                                                    
                                                    <div className="flex gap-2 mt-2">
                                                        {attack.energy.map((energy, idx) => (
                                                            <span key={idx} className="px-2 py-1 bg-white/10 rounded">
                                                                {energy.amount} {energy.type}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {attack.effect && (
                                                        <p className="mt-2 text-sm text-white/70">
                                                            Effect: {attack.effect.description || 
                                                                    `${attack.effect.type} - ${attack.effect.amount}`}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {selectedCard.ability && (
                                            <div className="bg-white/5 rounded-lg p-4">
                                                <h3 className="font-semibold">{selectedCard.ability.name}</h3>
                                                <p className="text-sm text-white/70 mt-1">
                                                    {selectedCard.ability.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const getRarityClass = (rarity) => {
    switch(rarity) {
        case 8: return 'ring-2 ring-white/30 ring-offset-2 ring-offset-[#1C1C1E] mythic';
        case 7: return 'ring-2 ring-yellow-300/30 ring-offset-2 ring-offset-[#1C1C1E] legendary';
        case 6: return 'ring-2 ring-purple-400/30 ring-offset-2 ring-offset-[#1C1C1E] ultra-rare';
        case 5: return 'ring-2 ring-red-400/30 ring-offset-2 ring-offset-[#1C1C1E] hyper-rare';
        case 4: return 'ring-2 ring-yellow-400/30 ring-offset-2 ring-offset-[#1C1C1E] ultra-rare';
        case 3: return 'ring-1 ring-purple-400/20 ring-offset-2 ring-offset-[#1C1C1E] rare';
        case 2: return 'ring-1 ring-blue-400/20 ring-offset-2 ring-offset-[#1C1C1E] uncommon';
        default: return 'ring-1 ring-gray-500/20 ring-offset-2 ring-offset-[#1C1C1E] common';
    }
};

const getRarityText = (rarity) => {
    switch(rarity) {
        case 8: return 'Mythic Rare';
        case 7: return 'Legendary';
        case 6: return 'Ultra Rare';
        case 5: return 'Hyper Rare';
        case 4: return 'Ultra Rare';
        case 3: return 'Rare';
        case 2: return 'Uncommon';
        default: return 'Common';
    }
};

export default OpenPackUI;

