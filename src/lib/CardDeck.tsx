import Card from "./Card";

class CardDeck {
    public allCard: Card[] = [];
    private allRanks: string[] = ['2','3','4','5','6','7','8','9','10','j','q','k','t'];
    private allSuits: string[] = ['diams','hearts','clubs','spades'];

    constructor()
    {
        for (const suit of this.allSuits) {
            for (const rank of this.allRanks) {
                const card = new Card(rank, suit);
                this.allCard.push(card);
            }
        }
    };

    getCard() {
        const random = Math.floor(Math.random() * this.allCard.length);
        const card = this.allCard.splice(random, 1)[0];
        return card;
    };

    getCards(howMany:number) {
        const arrayCards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            arrayCards.push(this.getCard());
        }
        return arrayCards;
    };
}

export default CardDeck;