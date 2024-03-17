import React from 'react';

//using react Memoization

const Header2 = React.memo(function Header1({title2}){

    return <>
        <h1>My Name is {title2}</h1>
      </>
  })

export default Header2;