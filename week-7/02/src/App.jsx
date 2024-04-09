import { RecoilRoot,useRecoilState, useRecoilValue,useSetRecoilState } from 'recoil';
import './App.css';
import { countAtom, isEvenSelector } from './store/atoms/count';
import { useMemo } from 'react';

/* SELECTORS  */
/* If you know something is derived from bunch of dependency use ,'SELECTORS',just like we use useMemo() , both do same thing to avoid rerendering */

function App() {  
  return (
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  )
}

function Count() {
  console.log("Count rendered")
  return(
    <>
      <Buttons/>
      <CountRerenderer/>
    </>
  )
}

function CountRerenderer(){
  console.log("CountRerenderer component Rerendered. ")
  const count = useRecoilValue(countAtom); 
 
  return (
    <div>
      <h1>{count}</h1> <br />
      <EvenCountRerenderer/>
    </div>
  )
}
/* USING SELECTOR*/
function EvenCountRerenderer(){
  const count = useRecoilValue(countAtom); 
  const isEven = useRecoilValue(isEvenSelector);
  return (
    <>
    {isEven && <div>EVEN</div>}
  </>
  )
}

/* USING useMemo*/
// function EvenCountRerenderer(){
//   const count = useRecoilValue(countAtom); 
//   const isEven = useMemo(() =>{
//     return count % 2 == 0
//   } , [count]);    /* Will only rerender when count changes. */
 
//   return (
//     <>
//       {isEven && <div> EVEN </div>}
//     </>
//   )
// }

function Buttons(){
  // const [count, setCount] = useRecoilState(countAtom);
  /* If we carefully observe , we are not really using 'Count' outside the setCount , so why to have it ? */
  
  /*
  Other two way of setCount we know :
  1. setCount(count => count + 1);
  2. setCount(function(count){ count = count +1; })
  
  these way do not require count externally.
  */
  console.log("Button component Rerendered. ")
  const setCount = useSetRecoilState(countAtom);
  /* After this optimization , Button component will not rerender again and again on clicking thr button */

  return(
    <>
      <button onClick={()=>{ setCount(count => count + 1) }}>Increase</button>
      <button onClick={()=>{ setCount(count => count - 1) }}>Decrease</button>
    </>
  )
}
export default App;