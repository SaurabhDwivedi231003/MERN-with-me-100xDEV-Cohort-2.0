import { useEffect, useMemo, useState , memo, useCallback } from 'react';
import './App.css';

/* useCallback : used to avoid rerender for refrencial things */
/* make functions a variable , wrapped inside useCallback */
/* Memo use hoga useCallback k sath*/

function App() {

const [counter , setCounter] = useState(0);

//  function inputFunction(){
//       console.log("Child Clicked");
//   }

/* Memo : lets you skip rerendering a component when its props are unchanged */
// But yha pe fir bhi child rerender ho rha h , why??
// Beacause : 
/*
    function inputFunction1(){ console.log("Hi")}
    function inputFunction2(){ console.log("Hi")}

    inputFunction == inputFunction2 , javascript returns false even if their body their content is same.
    and since it consider them as diffrent function it RE-RENDERS.
    To avoid this , we use : useCallback
*/

/* writing inputFunction() : same function in this way */
const inputFunction = useCallback(()=>{
      console.log("Child Clicked")
},[])    // Again this is a depedency array , depends on conditions on which we want it to allow for rerendering



return (
    <>
     <button onClick={()=> {setCounter(counter+1)}}> Counter : {counter}</button>
     <Child inputFunction={inputFunction}/>
    </>
  );
}

const Child = memo(({inputFunction}) => {
      console.log("Child renders")

      return <>
            <button onClick={inputFunction}>Button Clicked</button>
      </>
});


export default App;



/* Memo : lets you skip rerendering a component when its props are unchanged */
// But yha pe fir bhi child rerender ho rha h , why??
// Beacause : 
/*
    function inputFunction1(){ console.log("Hi")}
    function inputFunction2(){ console.log("Hi")}

    inputFunction == inputFunction2 , javascript returns false even if their body their content is same.
    and since it consider them as diffrent function it RE-RENDERS.
    To avoid this , we use : useCallback
*/


// function App() {

// const [counter , setCounter] = useState(0);

// function logSomething(){
//     console.log("Child Clicked");
// }

// return (
//     <>
//      <button onClick={()=> {setCounter(counter+1)}}> Counter : {counter}</button>
//      <Child inputFunction={logSomething}/>
//     </>
//   );
// }

// const Child = memo(({inputFunction}) => {
//       console.log("Child renders")

//       return <>
//             <button onClick={inputFunction}>Button Clicked</button>
//       </>
// });


// export default App;
