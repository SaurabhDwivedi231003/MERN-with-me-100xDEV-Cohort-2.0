import { useEffect , useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const inputRef = useRef();

    useEffect(() => {
        // document.getElementById('input').focus();   // yha add krne se first render pe ya smjh lo kind of phle se hi focused rhega.
            inputRef.current.focus();
    }, [inputRef]); 

    const handleButtonClick = () => {
        // document.getElementById('input').focus();
           inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};

// Solution
// how to do this usign javascript
// document.getElementById('input').focus(); , also give id="input" to input field