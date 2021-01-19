import React, {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    // Increment call
    const handleIncrement = () => {
        setCount(count + 1);
    }

    // Decrement call
    const handleDecrement = () => {
        setCount(count - 1);
    }

    console.log(count);
    return (
        <>
            <div className = "counter-container">
                <button className = "increment" onClick={() => handleIncrement()}> + </button>
                <p>{count}</p>
                <button className = "decrement" onClick={() => handleDecrement()}> - </button>
            </div>
        </>
    )
}
