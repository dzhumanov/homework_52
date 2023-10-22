import './App.css'
import CardComponent from './lib/cardComponent'
import CardDeck from './lib/CardDeck'

function App() {
  const deck = new CardDeck();
  console.log(deck.getCards(5));

  return (
    <div className="playingCards faceImages">
      <CardComponent rank='k' suit='hearts'/>
    </div>
  )
}

export default App
