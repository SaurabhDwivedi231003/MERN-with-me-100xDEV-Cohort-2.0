import React, {useState} from 'react';
import './App.css';
import CardWrapper from './components/CardWrapper';
import TextComponent from './components/TextComponent';

// Now we will see : How to render component as a prop { jaise title as a prop bhjte the yaha pe ek component ko hi as prop bhjege}

function App() {
    return (
        <div>
           <CardWrapper innerComponent={<TextComponent/>}/>
           <CardWrapper innerComponent={<TextComponent/>}/>
        </div>
    );
}

// function CardWrapper({innerComponent}) {
//     return <div style={{ border : "2px solid black" , padding: "10px" , margin:"20px" }}>
//         {innerComponent}
//       </div>
//   }
  
// function TextComponent(){
//   return <div>
//        <h1> Hello </h1>
//     </div>
// }


export default App;
