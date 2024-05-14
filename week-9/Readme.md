# Custom Hooks in React

Custom hooks in React allow you to extract component logic into reusable functions. They are JavaScript functions whose names are prefixed with the word 'use'. A custom hook can have a state and side-effects.

## Why use Custom Hooks?

1. **Code Reusability**: Custom hooks allow you to write a logic once and reuse it in multiple components. This helps in reducing duplication in your code.

2. **Separation of Concerns**: Custom hooks allow you to separate your component logic based on what it is doing rather than the lifecycle method it is in.

3. **Sharing Logic**: Custom hooks are a great way to share your logic with the community. You can publish your custom hooks and others can use them.

## How to create a Custom Hook?

1. Creating a custom hook is like creating a normal function, but it has a convention that it should start with    'use'.
2. Uses another hook internally { useState , useEffect ,another custom hooks}

```jsx
import { useState, useEffect } from 'react';

function useCustomHook() {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    // Update the value state here
  });

  return value;
}
```

```jsx
// Custom Hook for Data Fetching
import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'

// There is a library SWR : for data fetching hook
/*
import useSWR from 'swr'

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
  
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
*/

// Custom hooks: hooks that we can create our own , so that we can use or someone else can use it.
// We are creating Custom hook to fetch data from an API , similar to SWR.

// Creating custom Hooks.
// Below is made by us.
function useTodos(n){
  const[todos , setTodos] = useState([]);
  const[loading , setLoading] = useState(true);
  
  useEffect(()=>{
    const interval = setInterval(() => {   // this will be called in regular interval
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res=>{
        setTodos(res.data.todos)
        setLoading(false);  
      });
    }, n * 1000); // n seconds

    axios.get("https://sum-server.100xdevs.com/todos")   // calling it atleast once
    .then(res=>{
      setTodos(res.data.todos)
      setLoading(false);  
    });

    // CleanUp function : Clear interval is important to avoid unnecessary calls to the API.
    return () => clearInterval(interval);
  },[n]) // dependency array

  return {todos , loading};  
}


function App() {
  // This code has no problem but it is not reusable , and everything is shoved into one component.

  // using normal hooks
  /* 
  const[todos , setTodos] = useState([]);
   useEffect(()=>{
       axios.get("https://sum-server.100xdevs.com/todos")
       .then(res=>{
         setTodos(res.data.todos)
       });
   },[]) 
  */

  // using custom hooks
  const {todos , loading} = useTodos(5);
  if(loading){
    return <div>Loading...</div>
  }
  
  return (
    <> 
      {todos.map(todo => <Track key={Math.random()} todo={todo}/>) }
    </>
  )
}

function Track({todo}){
   return <div>
        {todo.title}
        <br />
        {todo.description}
   </div>
}

export default App
```

```jsx
// Custom hook to check if the user is online or offline.
import React, { useEffect, useState } from 'react'
function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)  // set weather or not online initially.

  useEffect(() => {
   window.addEventListener('online',()=>{
      setIsOnline(true);
   })
   window.addEventListener('offline' ,()=>{
    setIsOnline(false)
   })
  }, [])
  return isOnline;
}

function App() {
const isOnline = useIsOnline();
if(isOnline){ return "You are online yay !"}
else
  return "You are offline , please connect to te internet !"
}

export default App
```

```jsx
// Custom hook to mousePointer

const useMousePointer = () => { 
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x : e.clientX , y : e.clientY });
  };
  useEffect(()=>{
    window.addEventListener('mousemove', handleMouseMove);
    // cleanUp function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  },[])
  return position;
}

function App() {
   const mousePointer = useMousePointer();
   return (
    <>
      Your Mouse position is {mousePointer.x} , {mousePointer.y}
    </>
   )
}

```

***Assignment***
Create a custom Hook for a Height and Width of page.

```jsx  
// Custom hook to get the height and width of the page.
import React, { useEffect, useState } from 'react'
function useWindowSize(){
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })  // set weather or not online initially.

  useEffect(() => {
   const handleResize = () => {
     setSize({ width: window.innerWidth, height: window.innerHeight });
   }
   window.addEventListener('resize', handleResize);
   return () => {
     window.removeEventListener('resize', handleResize);
   }
  }, [])
  return size;
}
```
```jsx
import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

// Custom hook to check : Performance / Time based.
function usePerformance() {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}


function App() {
  const time = usePerformance()
   return (
    <>
        <h2>Time: {time}</h2>
    </>
   )
}
```