import {useEffect, useMemo, useState, memo, useCallback} from 'react';
import './App.css';
import axios from 'axios';

  function useTodos(){    // 'use' keyword is important
    const [todos , setTodos] = useState([]);
  
    useEffect(()=>{
      axios.get("")
      .then((res)=>{ setTodos(res.data.todos)})
    } ,[]);
  
    return todos;
    }

    /* Why is it important to make custome hook ?
      -> if we make all the hooks inside App() then code becomes confusing.
      
      why can't we wrap it using normal function ?
      -> useState or any other hooks can be wrapped inside normal function so it is important to use it on the same function where declared
        or make custome hooks and use it anywhere
    */
  

function App() {
  // const [todos , setTodos] = useState([]);
  // useEffect(()=>{
  //   axios.get("")
  //   .then((res)=>{ setTodos(res.data.todos)})
  // } ,[])
  
  /* All above can be done inside a custom hook*/

    const todos = useTodos();

    return (
    <>
      {todos}
    </>
  );
}


export default App;