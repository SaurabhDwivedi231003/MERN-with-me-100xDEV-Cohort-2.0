
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  //suspense , ErrorBoundary : will help use resolve if dont use below things.
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id)); // as it is data le ayega jaise abi tk ho rha tha but idhr pe extra cheez ye h ki agr app load ho rha aur toh ye checks lga k loading... show kr skte else app crash ho jyega.
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   
   return (
    <> 
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App
