import {useEffect, useRef, useState} from 'react';
import './App.css';

/*  useRef : overriding the already presenet thing into certain DOM elements */


function App() {

      /* in the output firstly it would show '2000' , after 2 second it will become '18' */  
    const [incomeTax, setIncomeTax] = useState(2000);
    const divRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
              divRef.current.innerHTML = 18;
        },3000)
    },[])
    return (
    <>
        Your income tax return are <div ref={divRef}>{incomeTax}</div>
    </>
  );
}

/*   //Normal way of doing this but not an effetive approach.
function App() {

    const [incomeTax, setIncomeTax] = useState(2000);

    useEffect(()=>{
        setTimeout(()=>{
              document.getElementById('incomeTaxContainer').innerHTML = 18;
        },5000)
    },[])
    return (
    <>
        Your income tax return are <div id="incomeTaxContainer">{incomeTax}</div>
    </>
  );
}

*/

export default App;