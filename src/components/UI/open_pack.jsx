import React, { useState, useEffect } from 'react';
import OpenPack from '../function/Open_pack';
import useSound from 'use-sound';
import pack_open from "../../audio/5.mp3";

const OpenPackUI = () => {
    const [cards, setCards] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [revealedCards, setRevealedCards] = useState([]);
    const packOpener = OpenPack();
    
    const [playPackOpen, { stop: stopPackOpen }] = useSound(pack_open);

    const handleOpenPack = async () => {
        setIsAnimating(true);
        stopPackOpen();
        playPackOpen();
        const newCards = packOpener.openNewPack();
        
        if (!newCards || !Array.isArray(newCards) || newCards.length === 0) {
            console.error('Failed to load cards');
            setIsAnimating(false);
            return;
        }

        setRevealedCards([]);
        setCards(newCards);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsOpen(true);
        
        for (let i = 0; i < newCards.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            setRevealedCards(prev => [...prev, i]);
        }
        
        setIsAnimating(false);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#1C1C1E] p-8">
            <button 
                onClick={handleOpenPack}
                disabled={isAnimating}
                className={`
                    px-12 py-4 mb-12
                    text-xl font-medium text-white
                    bg-white/10
                    hover:bg-white/20
                    rounded-full shadow-lg
                    transform transition-all duration-300 ease-in-out
                    ${isAnimating ? 'opacity-50' : 'hover:scale-102'}
                    disabled:cursor-not-allowed
                    backdrop-blur-xl
                    border border-white/10
                `}
            >
                {isAnimating ? (
                    <div className="flex items-center space-x-2">
                        <span className="text-white/90">Opening Pack</span>
                        <div className="w-5 h-5">
                            <svg className="animate-spin" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                        </div>
                    </div>
                ) : 'Open Pack'}
            </button>

            {isOpen && (
                <div className="w-full max-w-8xl px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {cards.map((card, index) => (
                            <div 
                                key={index} 
                                className={`
                                    card-container
                                    ${revealedCards.includes(index) ? 'revealed animate-card-reveal' : 'unrevealed'}
                                    transform transition-all duration-500 ease-in-out
                                    ${getRarityClass(card?.rarity || 1)}
                                    hover:scale-103
                                    group
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
                            </div>
                        ))}
                    </div>
                </div>
            )}
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

