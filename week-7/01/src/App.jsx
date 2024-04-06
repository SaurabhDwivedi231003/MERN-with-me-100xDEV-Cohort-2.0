import {useContext, useState} from 'react';
import './App.css';
import { CountContext } from './context';

/* Check notes and code below to know how it looked before using contextAPI*/
  
/*    Hierarchy of components
      --> APP
          --> Count
             -> Buttons
             -> CountRenrenderer

    Store state variable at LCA : Lowest common ancestors 
*/ 

function App() {  
  const [count , setCount] = useState(0);
  /* Wrap anyone that wants to use the teleport value isnside a provider. */
  return (
    <>
      <CountContext.Provider value={{count , setCount}}>
        <Count/>
      </CountContext.Provider>
    </>
  )
}
/* Hum chahte hain count k andar hi button ho toh initial count ko sirf 'count' as a prop chahiye , but Buttons component ki wjh se 'setCount' bhi chahiye ab */
// This is Prop Drilling

function Count() {
  return(
    <>
      <Buttons/>
      <CountRerenderer/>
    </>
  )
}

function CountRerenderer(){
  const {count} = useContext(CountContext);
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

function Buttons(){
  const {count , setCount} = useContext(CountContext);
  return(
    <>
      <button onClick={()=>{ setCount(count+1) }}>Increase</button>
      <button onClick={()=>{ setCount(count-1) }}>Decrease</button>
    </>
  )
}
export default App;
