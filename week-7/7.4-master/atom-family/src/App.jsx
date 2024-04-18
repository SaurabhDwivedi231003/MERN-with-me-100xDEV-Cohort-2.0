import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

// remember every atom contains only one value for todo , if we want to store multiple todo we need to use atomFamily.
// when you have  multiple atom for diffrent components then you can use atomFamily.
// we can dynamically create atom using atomFamily.

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3} />
    <Todo id={4} />
  </RecoilRoot>
}

function Todo({id}) {
  const todo = useRecoilValue(todosAtomFamily(id)); // it only renders required component not all the Todo components.

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </> 
  )
}

export default App


  // const todoAtom = atom({    
  //   key : 'todoAtom',
  //   default : {
  //     id : 1,
  //     title : 'Default Title',
  //     description : 'Default Description'
  //   }
  // })
  // const currentTodo = useRecoilValue(todoAtom);
  // if we do this then only one todo will be stored in atom and in main APP component we will get the same todo for all the id's.
  // Also the App component have 4 Todo components with different id's but the todo will be same for both the Todo components.
 