import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder?: string;
    name: string;
    id: string;
}

const Input = forwardRef(({type, placeholder, name, id,...rest}:InputProps, ref: Ref<HTMLInputElement>)=>{
    return <input 
    ref={ref}
    className="input" 
    type={type} 
    placeholder={placeholder} 
    name={name} 
    id={id} 
    {...rest}/>
}
)
export default Input;