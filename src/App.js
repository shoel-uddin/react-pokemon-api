import './App.css';
import GetCard from './components/GetCard';
import CardHolder from './components/CardHolder';
import { useState } from 'react';

function App() {
  const [cards, setCard] = useState("")
  async function getCard(){
    // const getCard = fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${Math.floor(Math.random() * 10)}`)
    const getCard = fetch(`https://pokeapi.co/api/v2/pokemon?offset=100&limit=100` )
    const response = await getCard;
    const cardData = await response.json()
    const card = cardData.results[0];
    const card1 = cardData.results;
    console.log(card);
    console.log(card1);
    // console.log(cardData);
    // console.log(card.name);

    //console.log(cardData.cards);
    setCard(card1)
    //setCard([cards, cardData])
    //console.log(setCard);
  }




  return (
    <div className="App">
      <header className="App-header">
        <GetCard GetCard={getCard}/>
        <CardHolder Cards={cards}/>
      </header>
    </div>
  );
}

export default App;
