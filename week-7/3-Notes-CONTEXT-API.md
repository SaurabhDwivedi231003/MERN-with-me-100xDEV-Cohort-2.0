Sure, here are some notes on the Context API in React:

1. **Introduction to Context API**
   - The Context API is a component structure provided by React that enables you to share specific forms of data across all levels of the application. It's meant to share data that can be considered "global" for a tree of React components.

2. **Creating Context**
   - Context is created using React's `createContext` method, which returns a Context object.
   ```javascript
8a365552-032f-49b5-9e02-f7f0e70635ab

   const MyContext = React.createContext(defaultValue);
   
```
   - The `defaultValue` argument is only used when a component does not have a matching Provider above it in the tree.

3. **Context.Provider**
   - `Context.Provider` is a React component that allows consuming components to subscribe to context changes.
   - The `value` prop is required to pass the current context value to the component's descendants. When React renders a component that subscribes to this Context object, it will read the current context value from the closest matching Provider above it in the tree.
   ```javascript
24b9c210-b9fc-4297-a163-2792d2d30d4a

   <MyContext.Provider value={/* some value */}>
   
```
   
4. **Context.Consumer**
   - This is a React component that subscribes to context changes. This lets you subscribe to a context within a function component.
   ```javascript
ba5411a5-bb1b-421c-95dd-1ae7fe17b20c

   <MyContext.Consumer>
     {value => /* render something based on the context value */}
   </MyContext.Consumer>
   
```
   
5. **useContext Hook**
   - The `useContext` hook is used to consume the context value. It allows you to read the context and renders whenever this context value changes.
   ```javascript
5f1abc66-dbf6-4fc7-84b5-65913bde0205

   const contextValue = useContext(MyContext);
   
```
   
6. **Example of Context API**
   - Here is a simple example of how to use the Context API:
   ```javascript
8c91cbf7-0dbb-434c-9ec2-e8087be8b924

   import React, { useContext } from 'react';

   // Create a Context
   const NameContext = React.createContext('Default Name');

   // Create a component that uses the Context
   function ChildComponent() {
     const name = useContext(NameContext);
     return <p>{name}</p>;
   }

   // Use the Provider to pass the value
   function ParentComponent() {
     return (
       <NameContext.Provider value="John">
         <ChildComponent />
       </NameContext.Provider>
     );
   }
   
```
   
7. **When to Use Context API**
   - Context API is primarily used when some data needs to be accessible by many components at different nesting levels. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
```


### Code : Before context API

import {useState} from 'react'
import './App.css'

/* --> APP
      --> Count
         -> Buttons
         -> CountRenrenderer

    Store state variable at LCA : Lowest common ancestors 
*/

function App() {  
  const [count , setCount] = useState(0);
  return ( 
   <>
      <Count count={count} setCount={setCount}/>
   </> 
  )
}

/* Hum chahte hain count k andar hi button ho toh initial count ko sirf 'count' as a prop chahiye , but Buttons component ki wjh se 'setCount' bhi chahiye ab */
// This is Prop Drilling

function Count({count , setCount}) {
    return(
      <>
      <Buttons count={count} setCount={setCount}/> 
      <CountRerenderer count={count}/>
      </>
    )
}

function CountRerenderer({count}){
  return (
    <>
    <h1>{count}</h1>  
    </>
  )
}

/* Isko toh 'count , setCount' as a prop chahiye hi chahiye chahe koi b call kre */
function Buttons({count, setCount}){
  return(
    <>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
    </>
  )
}
export default App