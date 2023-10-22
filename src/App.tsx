import './App.css';
import Card from './lib/Card';
import CardComponent from './lib/cardComponent';
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';
import {useState} from 'react';

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardStatus, setCardStatus] = useState(false);
  let combinationStr:string;

  const buttonFunction = () => {
    const deck = new CardDeck();
    const hand = deck.getCards(5);
    console.log(hand);
    setCards(hand);
    setCardStatus(true);
  };

  const combination = new PokerHand(cards);
  combinationStr = combination.getOutcome();

  return(
    <div className='app'>
      <button type='button' className='button' onClick={buttonFunction}>
        Раздать карты:
      </button>
      <div className='playingCards faceImages'>
        {cards.map((card, index) => (
          <CardComponent key={index} rank={card.rank} suit={card.suit} />
        ))}
      </div>
      {cardStatus && <p>{combinationStr}</p>}
    </div>
  );
};

export default App
