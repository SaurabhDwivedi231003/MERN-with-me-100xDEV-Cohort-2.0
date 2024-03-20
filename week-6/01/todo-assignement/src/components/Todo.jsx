import React from 'react';

export default function Todo({id, title, description}) {
  return (
    <div>
        <h3>{id}: {title}</h3>
        <p>{description}</p>
    </div>
  )
}