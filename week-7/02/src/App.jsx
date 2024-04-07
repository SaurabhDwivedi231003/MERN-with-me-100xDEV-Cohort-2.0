import { RecoilRoot,useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import { countAtom } from './store/atoms/count';

/*Even though Count component is not involved while using Context API , The count component re-render again and again which needes to be optimised.*/

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
/* Above component should have nothing to do with our count state as they are not using but re-rendering themselves which is not needed.
/* Below component will have access to state directly. */

function CountRerenderer(){
  /* It just need value */
  const count = useRecoilValue(countAtom); 
  /* If we need both than */
  // const [count, setCount] = useRecoilState(countAtom);  // We can always use this and ignore other setCount as not needed , BUT , if we dont need other varibale we should use single varible as that is more performant.
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom);
  return(
    <>
      <button onClick={()=>{ setCount(count+1) }}>Increase</button>
      <button onClick={()=>{ setCount(count-1) }}>Decrease</button>
    </>
  )
}
export default App;