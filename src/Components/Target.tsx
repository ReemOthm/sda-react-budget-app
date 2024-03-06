import { ChangeEvent, useEffect, useState } from "react";
import Input from "./UI/Input";

interface IProps {
    savingAmount: number
}

const Target = ({savingAmount}:IProps)=>{

    // ---------------STATES-----------------
    const [target,setTarget] = useState(0);
    const [progressAmount,setProgressAmount] = useState(0);

    // ---------------HANDLERS-----------------
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setTarget(Number(value))
    }

    // -------------useEffect------------------
    useEffect(()=>{
        const progress = (savingAmount / target) * 100;
        setProgressAmount(progress);
    })

    const handleReset = ()=> setTarget(0);

    return (
        <form>
            <label htmlFor="target">
                Set Target
                <Input type="numer" name="target" id="target" onChange={handleChange} required/>
            </label>
            <input type="reset" value='Reset' onClick={handleReset} />
            <p>Current Saving: {savingAmount}</p>
            <p>Target: {target}</p>
            <label htmlFor="progress">
                Progress: {progressAmount}% 
                <progress id="progress" value={progressAmount.toString()} max={100} />
            </label>
        </form>
    )
}

export default Target;