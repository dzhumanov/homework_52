interface Props {
    rank: string;
    suit: string;
};

const Card = (props: Props) => {
    const getSuit = (suit:string) => {
        switch (suit) {
        case 'diams':
            return '♦';
        case 'hearts':
            return '♥';
        case 'clubs':
            return '♣';
        case 'spades':
            return '♠';
        default:
            throw new Error(`Error!`);
        }
    };

    return (
        <span className={`card rank-${props.rank} ${props.suit}`}>
            <span className="rank">{props.rank.toUpperCase()}</span>
            <span className="suit">{getSuit(props.suit)}</span>
        </span>
    );
};

export default Card;