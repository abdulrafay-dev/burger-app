import './App.css';
import Burger from './components/burger/Burger';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import React, { useState } from 'react';

function App() {
  const [lettuce, setLettuce] = useState(0);
  const [tomato, setTomato] = useState(0);
  const [onion, setOnion] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [beef, setBeef] = useState(0);

  const addLettuce=()=>{
    setLettuce(lettuce+1);
  }

  const addTomato=()=>{
    setTomato(tomato+1);
  }

  const addOnion=()=>{
    setOnion(onion+1);
  }

  const addCheese=()=>{
    setCheese(cheese+1);
  }

  const addBeef=()=>{
    setBeef(beef+1);
  }

  const removeLettuce=()=>{
    lettuce>0 && setLettuce(lettuce-1);
  }

  const removeTomato=()=>{
    tomato>0 && setTomato(tomato-1);
  }

  const removeOnion=()=>{
    onion>0 && setOnion(onion-1);
  }

  const removeCheese=()=>{
    cheese>0 && setCheese(cheese-1);
  }

  const removeBeef=()=>{
    beef>0 && setBeef(beef-1);
  }

  return (
    <div className="App">
      <Navbar />
      <Burger lettuce={lettuce} tomato={tomato} onion={onion} cheese={cheese} beef={beef} />
      <Footer addLettuce={addLettuce} addTomato={addTomato} addOnion={addOnion} addCheese={addCheese} addBeef={addBeef} removeLettuce={removeLettuce} removeTomato={removeTomato} removeOnion={removeOnion} removeCheese={removeCheese} removeBeef={removeBeef} lettuce={lettuce} tomato={tomato} onion={onion} cheese={cheese} beef={beef} />
    </div>
  );
}

export default App;
