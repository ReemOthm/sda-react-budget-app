import { ReactNode, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

const Button = ({children,...rest}:Props)=>{
    return <button className="button" {...rest}>{children}</button>
}

export default Button;