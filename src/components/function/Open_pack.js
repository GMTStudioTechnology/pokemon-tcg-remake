import { PokemonList, cardposibility } from './PokemonList';

function OpenPack() {
    function getRandomCard(rarity) {
        // Combine all Pokemon types into a single array
        const allCards = Object.values(PokemonList).reduce((acc, typeArray) => {
            return acc.concat(typeArray.filter(card => card && card.rarity === rarity));
        }, []);

        // Check if we have any cards of this rarity
        if (allCards.length === 0) {
            console.warn(`No cards found with rarity ${rarity}, falling back to rarity 1`);
            return getRandomCard(1); // Fallback to common cards
        }

        const randomIndex = Math.floor(Math.random() * allCards.length);
        const selectedCard = allCards[randomIndex];
        
        // Fix the image path
        const imagePath = selectedCard.image.replace('../../', '/');
        
        return {
            ...selectedCard,
            image: imagePath
        };
    }

    function getCardByProbabilities(probabilities) {
        const random = Math.random();
        let cumulativeProbability = 0;
        
        // Check each rarity level against the random number
        for (let rarity = 1; rarity <= 8; rarity++) {
            cumulativeProbability += probabilities[rarity] || 0;
            if (random < cumulativeProbability) {
                return getRandomCard(rarity);
            }
        }
        
        // Fallback to rarity 1 if no card was selected
        return getRandomCard(1);
    }

    function openNewPack() {
        try {
            const pack = [];
            
            // First three cards (commons)
            for (let i = 0; i < 3; i++) {
                pack.push(getCardByProbabilities({
                    1: cardposibility[1][0],  // 100%
                    2: cardposibility[1][1],  // 0%
                    3: cardposibility[1][2],  // 0%
                }));
            }

            // Fourth card (uncommon/rare slot)
            pack.push(getCardByProbabilities({
                1: cardposibility[1][1],  // 0%
                2: cardposibility[2][1],  // 90%
                3: cardposibility[3][1],  // 5%
                4: cardposibility[4][1],  // 1.666%
                5: cardposibility[5][1],  // 2.572%
                6: cardposibility[6][1],  // 0.5%
                7: cardposibility[7][1],  // 0.222%
                8: cardposibility[8][1],  // 0.04%
            }));

            // Fifth card (rare slot)
            pack.push(getCardByProbabilities({
                1: cardposibility[1][2],  // 0%
                2: cardposibility[2][2],  // 60%
                3: cardposibility[3][2],  // 20%
                4: cardposibility[4][2],  // 6.664%
                5: cardposibility[5][2],  // 10.288%
                6: cardposibility[6][2],  // 2%
                7: cardposibility[7][2],  // 0.888%
                8: cardposibility[8][2],  // 0.16%
            }));

            return pack.sort(() => Math.random() - 0.5);
        } catch (error) {
            console.error('Error opening pack:', error);
            return [];
        }
    }

    return { openNewPack };
}

export default OpenPack;
