import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Todo 1',
            description: 'Description 1'
        }, {
            id: 2,
            title: 'Todo 2',
            description: 'Description 2'
        }, {
            id: 3,
            title: 'Todo 3',
            description: 'Description 3'
        }
    ]);

    const [counter, setCounter] = useState(4);

    function addTodo() {
        setTodos([
            ...todos, {
                id: counter,
                title: 'New Todo added',
                description: 'New Description added'
            }
        ]);
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
            {
                todos.map(
                  todo => <Todo id={todo.id} title={todo.title} description={todo.description} key={todo.id} />
                )
            }
        </div>
    );
}

export default App;

  //   function addTodo() {
  //     const newTodo = [];
  //     for (let i = 0; i < todos.length; i++) {
  //         newTodo.push(todos[i]);
  //     }
  //     newTodo.push(
  //         {id: Math.random(), title: 'Todo 4', description: 'Description 4'}
  //     );
  //     setTodos(newTodo);
  // }
