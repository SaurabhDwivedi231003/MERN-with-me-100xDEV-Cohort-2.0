import React from 'react'

/* todos=[{
    title : "go to gym",
    description : "go to gym"
}] */

export default function Todos({todos}) {
  return (
    <div>
            {todos.map(function(todo){
                return <div>      
                     <h1>{todo.title}</h1>
                     <h3>{todo.description}</h3>
                     <button>{todo.complete == true ? "Completed" : "Mark as complete"}</button>
                </div>
            })}
    </div>
  )
}

