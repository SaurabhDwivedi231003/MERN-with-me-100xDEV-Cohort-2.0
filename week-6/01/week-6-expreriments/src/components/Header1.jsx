import React from 'react';

//using react Memoization

const Header1 = React.memo(function Header1({title}){

    return <>
        <h1>My Name is {title}</h1>
      </>
  })

export default Header1;