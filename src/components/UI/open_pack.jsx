import React, { useState, useEffect } from 'react';
import OpenPack from '../function/Open_pack';
import useSound from 'use-sound';
import pack_open from "../../audio/5.mp3";
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

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
        setIsAnimating(true);
        setIsPackVisible(false);
        stopPackOpen();
        playPackOpen();
        
        // Animate pack opening
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
        
        setTimeout(() => {
            setIsPackVisible(true);
            setIsAnimating(false);
        }, 2000);

        // Add sparkle effects for rare cards
        const hasRareCard = newCards.some(card => card.rarity >= 4);
        if (hasRareCard) {
            setSparkles(true);
            setTimeout(() => setSparkles(false), 3000);
        }
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E] p-8">
            <AnimatePresence>
                {isPackVisible && (
                    <motion.div 
                        animate={packControls}
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
                                    <div className="relative w-full pt-[140%] perspective-1000">
                                        <div className="card-flipper">
                                            <div className="card-back absolute top-0 left-0 w-full h-full">
                                                <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-xl"></div>
                                                <img 
                                                    src="/images/card-back.png" 
                                                    alt="Card Back"
                                                    className="w-full h-full object-cover rounded-2xl"
                                                />
                                            </div>
                                            
                                            <div className="card-front absolute top-0 left-0 w-full h-full">
                                                <img 
                                                    src={card?.image || '/images/default-card.png'} 
                                                    alt={card?.name || 'Card'}
                                                    className="w-full h-full object-cover rounded-2xl"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-md rounded-b-xl transition-all duration-300 group-hover:bg-black/40">
                                                    <h3 className="text-lg font-medium text-white text-center">
                                                        {card?.name || 'Unknown Card'}
                                                    </h3>
                                                    <p className="text-sm text-center text-white/80 mt-1">
                                                        {getRarityText(card?.rarity || 1)}
                                                    </p>
                                                </div>
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

