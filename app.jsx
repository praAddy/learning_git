import React, { useState } from 'react'

export default function Test2() {
    const [count, setcount] =  useState(0);

    const increment = () =>{
        setcount(count + 1);
    }

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}> Increment </button>
    </div>
  )
}



