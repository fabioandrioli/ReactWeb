import { ButtonHTMLAttributes } from "react";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>
export function Button(props:buttonProps){
    return( 
        <button className="button" {...props}></button>
    );
}

