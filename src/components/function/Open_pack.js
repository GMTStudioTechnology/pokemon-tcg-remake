import { PokemonList, cardposibility } from './PokemonList';

function OpenPack() {
    function getRandomCard(rarity) {
        // Combine all Pokémon types into a single array
        const allCards = Object.values(PokemonList).reduce((acc, typeCards, index) => {
            // Get the type name from PokemonList keys
            const type = Object.keys(PokemonList)[index];
            return acc.concat(
                typeCards
                    .filter(card => card && card.rarity === rarity)
                    .map(card => ({
                        ...card,
                        type: type // Add the type property explicitly
                    }))
            );
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
            image: imagePath,
            type: selectedCard.type // Ensure type is included
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
            
            console.log('=== Creating New Pack ===');
            
            // First three cards (commons)
            for (let i = 0; i < 3; i++) {
                const card = getCardByProbabilities({
                    1: cardposibility[1][0],  // 100%
                    2: cardposibility[1][1],  // 0%
                    3: cardposibility[1][2],  // 0%
                });
                console.log(`Common card ${i + 1}:`, card.name);
                pack.push(card);
            }

            // Fourth card (uncommon/rare slot)
            const card4 = getCardByProbabilities({
                1: cardposibility[1][1],  // 0%
                2: cardposibility[2][1],  // 90%
                3: cardposibility[3][1],  // 5%
                4: cardposibility[4][1],  // 1.666%
                5: cardposibility[5][1],  // 2.572%
                6: cardposibility[6][1],  // 0.5%
                7: cardposibility[7][1],  // 0.222%
                8: cardposibility[8][1],  // 0.04%
            });
            console.log('Uncommon/rare slot card:', card4.name);
            pack.push(card4);

            // Fifth card (rare slot)
            const card5 = getCardByProbabilities({
                1: cardposibility[1][2],  // 0%
                2: cardposibility[2][2],  // 60%
                3: cardposibility[3][2],  // 20%
                4: cardposibility[4][2],  // 6.664%
                5: cardposibility[5][2],  // 10.288%
                6: cardposibility[6][2],  // 2%
                7: cardposibility[7][2],  // 0.888%
                8: cardposibility[8][2],  // 0.16%
            });
            console.log('Rare slot card:', card5.name);
            pack.push(card5);

            console.log('=== Pack Created ===');
            return pack;  // Remove the .sort() to maintain order for debugging
        } catch (error) {
            console.error('Error opening pack:', error);
            return [];
        }
    }

    return { openNewPack };
}

export default OpenPack;
