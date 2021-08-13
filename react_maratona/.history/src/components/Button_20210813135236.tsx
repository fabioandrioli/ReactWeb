import { ButtonHTMLAttributes } from "react";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>
export function Button(props:buttonProps){

    const [counter,setCounter] = useState(0);

    function increments(){
        setCounter(counter +1);
    }
    return( 
        <button className="button" {...props}></button>
    );
}

