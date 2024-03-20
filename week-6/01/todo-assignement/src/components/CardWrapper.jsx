import React from 'react';


export default function CardWrapper({children}) {
    return <div>
        {children}
    </div>
}

// Another way of doing : 

// export default function CardWrapper({innerComponent}) {
//     return <div style={{border: "2px solid black",padding: "10px",margin: "20px"}}>
//         {innerComponent}
//     </div>
// }
