import './App.css'
import Card from './lib/Card';
import CardComponent from './lib/cardComponent'
import CardDeck from './lib/CardDeck'
import {useState} from 'react';

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const buttonFunction = () => {
    const deck = new CardDeck();
    const hand = deck.getCards(5);
    setCards(hand);
  };

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
    </div>
  );
};

export default App
