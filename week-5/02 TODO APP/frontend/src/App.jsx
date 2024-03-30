import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
   
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res){
         const json = await res.json();
         setTodos(json.todos);
      });
  }, []); // Empty dependency array means this effect will only run once, when the component mounts

  return (
    <div> 
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  );
}

export default App;