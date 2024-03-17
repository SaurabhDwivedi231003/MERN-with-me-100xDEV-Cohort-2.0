import React from 'react'
import {useState} from 'react';

function Header2(){
    const [title, setTitle] = useState('Seenu');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const array =["seenu" , "bunny" , "lalu" ,"tonu" , "gullu" , "piggu" ,"Bannu"];
  
   
    function setOtherName(){
      setTitle(array[currentIndex]);
      setCurrentIndex((currentIndex + 1) % array.length);
    }
  
  return <>
        <button onClick={setOtherName}>Update the Title setOtherName : </button>
        <h3> {title}</h3>
  </>
}

export default Header2