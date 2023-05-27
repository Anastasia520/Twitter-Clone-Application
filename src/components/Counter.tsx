import  { useState } from 'react';

import classes from "./Counter.module.scss"

export default function Counter() {

    const [count, setCount] = useState (0);

    const handleIncrement = () =>{
        setCount(count+1)
    }

  return (
    <div className={classes.btn}>
<h1>{count}</h1>
<button onClick={handleIncrement}>increment</button>
    </div>
  )
}
