import { PokemonList, cardposibility } from './PokemonList';

function OpenPack() {
    function getRandomCard(rarity) {
        const cards = Object.values(PokemonList).flat().filter(card => card.rarity === rarity);
        const randomIndex = Math.floor(Math.random() * cards.length);
        const selectedCard = cards[randomIndex];
        
        // Import image dynamically from the public folder
        const imagePath = `/images/${selectedCard.image.split('/').pop()}`; // This will get just the filename
        
        // Return the full card data, just updating the image path
        return {
            ...selectedCard,  // Spread all original card properties
            image: imagePath  // Override just the image path
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
        const pack = [];
        
        // First three cards
        for (let i = 0; i < 3; i++) {
            pack.push(getCardByProbabilities({
                1: cardposibility[1][0],  // 100%
                2: cardposibility[1][1],  // 0%
                3: cardposibility[1][2],  // 0%
            }));
        }

        // Fourth card
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

        // Fifth card
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

        // Shuffle the pack
        return pack.sort(() => Math.random() - 0.5);
    }

    return { openNewPack };
}

export default OpenPack;
