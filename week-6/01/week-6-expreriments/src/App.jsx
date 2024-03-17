import React, { useState } from 'react';
import './App.css';
import Header1 from './components/Header1';
import Header2 from './components/Header2';

function App() {
 
  return (
    <div>
      <Header1 />  
      <Header2/>
    </div>
  )
}

/*
 Push down state to avoid rerenders
  - Changes on parent will rerender parent and will affect child components as well.
  - Changes on child will rerender child only.

 Solution : 
  - 1.0 : Push down state to avoid rerenders (child component me hi state define kro aur wahi use kro) 
  - 2.0 : Use React.memo to avoid rerenders (child component ko React.memo ke sath wrap kro)
          React Memoization : React.memo means that the component will not re-render if the props are the same.
          Agar props change nahi hote to component re-render nahi hoga.
*/

export default App;