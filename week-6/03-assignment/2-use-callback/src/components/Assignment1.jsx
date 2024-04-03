import { useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    
    // const handleIncrement = useCallback(() =>{
    //         setCount(count + 1); // not btter as it will access directly from : const [count, setCount] = useState(0); which is aproblem
    // }, [count]);   // this depends on state variable count

    
    const handleIncrement = useCallback(() =>{
        setCount(function(count){   // this function has acces to count variable.
            return count + 1 ;
        })
     }, []);  // this does not depend on any state variable because we are passing the function to setCount and function has access to it.



    // const handleDecrement = useCallback(() =>{
    //     setCount(count - 1);
    //  }, [count]);

    const handleDecrement = useCallback(() =>{
        setCount(function(count){   // this function has acces to count variable.
            return count - 1 ;
        })
     }, []); 
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
