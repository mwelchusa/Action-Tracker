import React, { useState, useEffect } from 'react';


function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('Green');

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count]); // {} runs after every re-render, {} , [] runs only on mount, {}, [value] Runs on mouny + when value changes

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "Green" ? "Red" : "Green")
    }
    

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Add</button>
        <br/>
        <button onClick={changeColor}> Change Color</button>
    </>)

}

export default MyComponent