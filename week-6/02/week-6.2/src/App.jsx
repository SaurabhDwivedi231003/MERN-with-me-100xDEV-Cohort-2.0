import { useEffect, useMemo, useState } from 'react';
import './App.css';

                           /* USE MEMO */

/*   => useMemo  : Create an app that does two thing :
          -> Increase a counter by one.
          -> Lts user put a value in an input box (n) , and you need to show sum from 1 to n.

        Condition : everything should to be inside app.
*/

function App() {

  const [counter , setCounter] = useState(0);
  const [inputValue , setInputValue] = useState(0);
  // const [finalValue , setFinalValue] = useState(0);  // used for useEffect

  /* Brute and ineffecient way to do , bad practice 
      let count = 0;
      for(let i=1 ; i<=inputValue ; i++){
        count += i;
      }
  */

  /* In this above approach everytime , we increase the counter entire page rerenders
       and the sum from 1 to n is calculated again and again.
    To avoid this we can use decent approach of useEffect hook.
    => But best approach is to use useMemo hook.
  */

 /*Using useEffect 
   useEffect(()=>{ 
      let count = 0;
      for(let i=1 ; i<=inputValue ; i++){
        count += i;
      }
      setFinalValue(count);
    }, [inputValue]); 
   */ 

  /*Using useMemo : more cleaner way and do no require extra useState : finalValue*/

  let count = useMemo(()=>{ 
    let finalCount = 0;
    for(let i=1 ; i<=inputValue ; i++){
      finalCount += i;
    }
    return finalCount;
  }, [inputValue]);


return (
    <>
     <input placeholder='enter a number' onChange={function(e){
        setInputValue(e.target.value);
     }}/>
     <br/>
     Sum from 1 to {inputValue} = {count}

     <button onClick={()=> {setCounter(counter+1)}}> Counter : {counter}</button>
    </>
  );
}


export default App;
