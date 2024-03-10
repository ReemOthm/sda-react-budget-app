import { ChangeEvent, useEffect, useState } from "react";
import Input from "./UI/Input";

import { useForm } from "react-hook-form";

interface Props {
    savingAmount: number
}

type Target = {
    amount: number
}

const Target = ({savingAmount}:Props)=>{

    const {
        register,
        formState: { errors },
    } = useForm<Target>({mode: "onBlur"});

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
        if(savingAmount > 0 && target > 0){
            const progress = (savingAmount / target) * 100;
            setProgressAmount(progress);
        }

        if(target === 0) setProgressAmount(0);
    })

    const handleReset = ()=> {
        setTarget(0);
        setProgressAmount(0)
    }

    return (
        <div>
            <form>
                <label htmlFor="target_amount">
                    Set Target
                    <Input 
                        type="number" 
                        id="target_amount" 
                        {...register("amount",{
                            min: {
                                value: 0,
                                message: "Target must be a positive number!"
                            }
                        })}
                        required
                        onChange={handleChange} 
                        />
                    {errors.amount && <span className="error-message">{errors.amount.message}</span>}
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