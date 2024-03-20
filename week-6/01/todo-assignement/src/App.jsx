import React, {useEffect, useState} from 'react';
import './App.css';

/* Understanding of useEffect , what is dependency array in ueEffect hook.
 This empty array is a dependency  if empty then it will re-render only once as updates,
     but if given some value then let say [counter] then it will update each time counter update. */

// Remember first arguement of useEffect can not be async so use promis , .then syntax
function App() {

    const[todos, setTodos] = useState([]);

    useEffect(()=>{
           setInterval(()=>{
            fetch("https://sum-server.100xdevs.com/todos")
            .then( async function(res){
                const json = await res.json();
                setTodos(json.todos);
            })
           },3000)
    },[])

    // simple way , above is refreshing after 3 seconds

    // useEffect(()=>{
    //         fetch("https://sum-server.100xdevs.com/todos")
    //         .then( async function(res){
    //             const json = await res.json();
    //             setTodos(json.todos);
    //         })
    // },[])
    
    return <div>
         {todos.map(todo => <Todo title={todo.title} description={todo.description} key={todo.id}/>)}
    </div>
}

function Todo({title , description}){
     return <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
    </div>
}

export default App;



/*

Things to cover in week-6.0
    -React Returns
    -Re-rendering (Memoization)
    -key
    -Wrapper Component
    -useEffect
    -useMemo
    -useCallback
    -useRef
*/