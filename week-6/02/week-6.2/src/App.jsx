import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// Assignment : take id from backend , FETCH data from bakend for same id and display that data on frontend.

function App() {
  const [id, setId] = useState('65ead2a66517fe444515d5e2');

  return (
    <>
      <button onClick={() => setId('65ead2a66517fe444515d5e2')}>1</button>
      <button onClick={() => setId('65ead2e26517fe444515d5e6')}>2</button>
      <button onClick={() => setId('65f180e73cfdf203612f434a')}>3</button>
      <button onClick={() => setId('65f181663cfdf203612f434c')}>4</button>
      {/* Pass the id directly, not setId */}
      <Todo id={id} />
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/todos/${id}`)
      .then(function (response) {
        setTodo(response.data);
      })
  }, [id]); // most important line

  return (
    <div>
      {/* Render todo details if it exists */}
      {todo && (
        <>
          <h4>{todo.title}</h4>
          <h5>{todo.description}</h5>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </>
      )}
    </div>
  );
}

export default App;
