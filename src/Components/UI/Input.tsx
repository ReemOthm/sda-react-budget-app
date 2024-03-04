import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder?: string;
    name: string;
    id: string;
}

const Input = ({type, placeholder, name, id,...rest}:IProps)=>{
    return <input className="input" type={type} placeholder={placeholder} name={name} id={id} {...rest}/>
}

export default Input;