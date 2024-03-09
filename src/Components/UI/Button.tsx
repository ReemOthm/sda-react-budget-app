import { ReactNode, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

const Button = ({children,...rest}:IProps)=>{
    return <button className="button" {...rest}>{children}</button>
}

export default Button;