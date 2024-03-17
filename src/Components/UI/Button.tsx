import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

const Button = ({children,...rest}:ButtonProps)=>{
    return <button className="button" {...rest}>{children}</button>
}

export default Button;