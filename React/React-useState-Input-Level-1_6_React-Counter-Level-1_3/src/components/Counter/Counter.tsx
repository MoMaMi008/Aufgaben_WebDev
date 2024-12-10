import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function plusOne(){
        setCounter(counter +1)
    }

    function minusOne(){
        setCounter(counter-1)
    }

    function resetCounter(){
        setCounter(0)
    }
    return ( 
        <section>
            <p>{counter}</p>
            <div>
                <button onClick={plusOne}>+</button>
                <button onClick={minusOne}>-</button>
                <button onClick={resetCounter}>Reset</button>
            </div>
        </section>
     );
}
 
export default Counter;