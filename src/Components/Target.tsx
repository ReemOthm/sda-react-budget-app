import { ChangeEvent, useEffect, useState } from "react";

import Input from "./ui/Input";


interface Props {
    savingAmount: number
}

const Target = ({savingAmount}:Props)=>{

    // ---------------STATES-----------------
    const [errorsMessage, setErrorsMessage] = useState('');
    const [target,setTarget] = useState(0);
    const [progressAmount,setProgressAmount] = useState(0);

    // ---------------HANDLERS-----------------
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        if(Number(value) < 0){
            setErrorsMessage("Target must be a positive number");
            return false;
        }
        else{
            setErrorsMessage("");
        }
        setTarget(Number(value));
    }

    // -------------useEffect------------------
    useEffect(()=>{
        if(savingAmount > 0 && target > 0){
            const progress = (savingAmount / target) * 100;
            setProgressAmount(progress);
        }

        if(target === 0) setProgressAmount(0);
    }, [savingAmount, target]);

    const handleReset = ()=> {
        setTarget(0);
        setProgressAmount(0)
    }

    return (
        <div className="form-container">
            <form>
                <label htmlFor="target_amount">
                    Set Target
                    <Input 
                        type="number" 
                        name="target_amount"
                        id="target_amount" 
                        required
                        onChange={handleChange} 
                        />
                    {errorsMessage && <span className="error-message">{errorsMessage}</span>}
                </label>
                <input className="button" type="reset" value='Reset' onClick={handleReset} />
                <p>Current Saving: {savingAmount}</p>
                <p>Target: {target}</p>
                <label htmlFor="progress">
                    Progress: {progressAmount.toFixed(2)}% 
                    <progress id="progress" value={progressAmount.toString()} max={100} />
                </label>
            </form>
        </div>
    )
}

export default Target;