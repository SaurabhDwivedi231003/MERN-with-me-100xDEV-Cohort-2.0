import React, { useState } from 'react';
import './App.css';
import Header1 from './components/Header1';
import Header2 from './components/Header2';

//  Recat Memoization : https://react.dev/reference/react/memo

function App() {
  const [title, setTitle] = useState('Saurabh');
  const [title2, setTitle2] = useState('Seenu');
  const [currentIndex, setCurrentIndex] = useState(0);

  const array =["seenu" , "bunny" , "lalu" ,"tonu" , "gullu" , "piggu" ,"Bannu"];

  function updateTitle() { 
    setTitle(Math.random().toString());
  }

  function setOtherName(){
    setTitle2(array[currentIndex]);
    setCurrentIndex((currentIndex + 1) % array.length);
  }

  return (
    <>
      <button onClick={updateTitle}>Update the Title with random no : </button>
      <Header1 title={title} />
      <br />
      <button onClick={setOtherName}>Update the Title setOtherName : </button>
      <Header2 title2={title2}/>
      <Header2 title2="Hello1"/>
      
    </>
  )
}

// start from  46 : 00

export default App;