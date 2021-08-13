import { useState } from "react";

export function Button(){

    const [counter,setCounter] = useState(0);

    function increments(){
        setCounter(counter +1);
    }
    return(
        <button className="button" onClick={increments}>{counter}</button>
    );
}

