import React from 'react'
import {useState} from 'react';

function Header1() {
    const [title, setTitle] = useState('Saurabh');

    function updateTitle() {
        setTitle(Math.random().toString());
    }

    return <> 
    < button onClick = { updateTitle } > Update the Title with random no : </button>
    <h3>My Name is {title}</h3>
    </>
  }

  export default Header1