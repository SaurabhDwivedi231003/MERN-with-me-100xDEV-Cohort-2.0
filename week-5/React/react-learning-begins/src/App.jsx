import React, { useState } from 'react';

// Todo applocation  : now our state will have array.
// {
//   todos: [{title : "todo1" , description:"description" , completed : false}]
// }

function App() {
  const [todo, settodo] = useState([{
      title : "Got to gym" ,
      description : "Do some exercise",
      completed : false
  },{ 
      title : "Do DSA" ,
      description : "Do some question",
      completed : true
  },{ 
      title : "Eat the food" ,
      description : "eat kulche choole ",
      completed : true
  }]);

  function addTodo(){
    // [1,2]
    // [...todo ,3] = [1,2,3]
    settodo([...todo, {title : "New Todo" , description : "New Description" , completed : false}]);
  }
  
  return (
    <div>
          {/* <ToDo title={todo[0].title} description={todo[0].description} completed={todo[0].completed} />
          <ToDo title={todo[1].title} description={todo[1].description} completed={todo[1].completed} /> */}
          {todo.map(function(todo){
            return <ToDo title={todo.title} description={todo.description} completed={todo.completed} />
          })}

          <button onClick={addTodo}>Add Todo</button>

    </div>
  );
}

// Component
function ToDo(props) {
  
  return <div >
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    <h3>{props.completed ? "Completed" : "Not Completed"}</h3>
  </div>;
}

export default App;