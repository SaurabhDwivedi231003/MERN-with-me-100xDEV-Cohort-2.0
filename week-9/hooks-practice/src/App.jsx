import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

// start from 30:00

function App() {
  const[render , setRender] = useState(true);
  useEffect(() => {
      // setTimeout(()=>{
      //   setRender(false);
      // },5000)

      setInterval(()=>{
        setRender(r => !r)
      },5000)
  },[]);

  return (
    <>
      {/* <FunctionBsedComponent />
      <ClassBasedComponent /> */}

      {/* {render ? <FunctionBasedLifeCycle/> : <div>Component went away</div>} */}
      {/* {render ? <ClassBasedLifeCycle/> : <div>Component went away</div>} */}
      
    </>
  )
}
export default App

//--------------------Diffrence in State in both Class/Function Based---------------------------------
// Function Based Component for the same.
export function FunctionBsedComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
     <button onClick={increment}>Increament</button>
    </>
  )
}

// Class Based Component for the same.
class ClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increament</button>
      </>
    )
  }
}

//---------------------------------Life Cycle Event on both----------------------------------------------------

// Function based Component.

function FunctionBasedLifeCycle() {
   useEffect(() => {
    console.error("Component mounted");
    
    return () => {   // this will be called when component unmounted.
      console.log("Component unmounted");
    };
   },[]);

  return (
    <>
      <p>Inside function based Component : Life Cycle Event</p>
    </>
  )
}


// Class Based Component.

class ClassBasedLifeCycle extends React.Component {
  // here it is more easier
  componentDidMount() {
    console.error("Component mounted");
  }
  componentWillUnmount(){
    console.log("Unmounted")
  }
  render(){
    return <div> Hello Inside ClassBsedLifeCycle </div>
  }
}
