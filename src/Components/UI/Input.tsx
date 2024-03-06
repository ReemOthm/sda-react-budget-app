import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder?: string;
    name: string;
    id: string;
}

const Input = forwardRef(({type, placeholder, name, id,...rest}:IProps, ref: Ref<HTMLInputElement>)=>{
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