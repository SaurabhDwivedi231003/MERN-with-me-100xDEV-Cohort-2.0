// Importing necessary modules and components
import './App.css';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

// App component
function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
} 

// Todo component
function Todo({ id }) {
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

export default App;
