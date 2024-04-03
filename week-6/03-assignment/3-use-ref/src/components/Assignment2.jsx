import React, { useState, useRef} from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.


// Here we will see second usecase of useref.

// SOLUTION : 2
// create a variable that persists across renders without causing additional renders when it changes.
// let countRerenders = 0;   // but problem is ki we should not use this variable directly, we should use useRef for this.

export function Assignment2() {
    const [ count , setCount] = useState(0);
    // SOLUTION : 1
    // const [countNoOfRenders, setCountNoOfRenders] = useState(0);

    // SOLUTION : 3 , using useRef
    // useRef is used to create a variable that persists across renders without causing additional renders when it changes.
    const numberofTimesRerenders = useRef(0);  
    
    const handleReRender = () => {
        // Update state to force re-render
        setCount(count+1);
        // SOLUTION : 1
        // setCountNoOfRenders(countNoOfRenders+1);  // problem is ki ye bta dega ki setCount kitne bar render hua h, but ye nhi btaega ki component kitne bar render hua h kuuki khud bhut bar- bar render hua h.
        //                                 // jaise yha pe do rerender hue ek setCount ke liye aur ek setCountNoOfRenders ke liye , but display sirf setCountNoOfRenders ke liye hua h.
    };

    // SOLUTION : 2
    // countRerenders = countRerenders + 1;

    // SOLUTION : 3
    numberofTimesRerenders.current = numberofTimesRerenders.current + 1;
    return (
        <div>
            <p>This component has rendered {numberofTimesRerenders.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};