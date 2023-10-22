interface Card {
    rank: string;
    suit: string;
};

class PokerHand {
    private cards: Array<Card>;

    constructor(cardArray: Array<Card>) {
        this.cards = cardArray;
    }

    getOutcome(): string {
        const rankCount: {[key: string]: number} = {};
        const suitCount: {[key: string]: number} = {};

        this.cards.forEach((card) => {
            rankCount[card.rank] = (rankCount[card.rank] || 0) + 1;
            suitCount[card.suit] = (suitCount[card.suit] || 0) + 1;
        });

        const uniqueRanks = Object.keys(rankCount).length;
        const uniqueSuits = Object.keys(suitCount).length;

        if (Object.values(rankCount).includes(3)) {
            return "Тройка";
        } else if (Object.values(rankCount).includes(2) && uniqueRanks === 3) {
            return "Две пары";
        } else if (Object.values(rankCount).includes(2)) {
            return "Одна пара";
        } else if (uniqueSuits === 1) {
            return "Флэш";
        } else {
            return "Старшая карта";
        }
    };
};

export default PokerHand;