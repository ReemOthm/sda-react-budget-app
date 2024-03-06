import { FormEvent, useRef, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { SourceType } from "../Types";
import { v4 as uuidv4 } from 'uuid';

const IncomeSource = ()=>{

    // ------------Refferrences-------------
    const sourceRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);

    // ------------STATES-------------
    const [incomeSources, setIncomeSources] = useState<SourceType[]>([]);
    
    // ------------HANDLERS-------------
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        if(sourceRef.current &&  amountRef.current && dateRef.current){
            const income = {
                id: uuidv4(),
                source: sourceRef.current.value,
                amount: Number(amountRef.current.value),
                date: new Date(dateRef.current.value),
            }
            setIncomeSources(prev=> [...prev, income]);
            sourceRef.current.value = '';
            amountRef.current.value = '';
            dateRef.current.value  = '';
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="source">
                    Income source
                    <Input ref={sourceRef} type="text" name="source" id="source" placeholder="Salary" required/>
                </label>
                <label htmlFor="amount">
                    Amount of income
                    <Input ref={amountRef}  type="numer" name="amount" id="amount" required/>
                </label>
                <label htmlFor="date">
                    Date of income
                    <Input ref={dateRef}  type="date" name="date" id="date" required/>
                </label>
                <Button>Add income</Button>
            </form>
            {incomeSources.length > 0 ? 
                <ul>
                    {incomeSources.map((income)=>{
                        return  <li key={income.id}>{income.source}: {income.amount}EUR on {income.date.toString()}</li>
                    })}
                </ul>
            : <p>No income source</p>
            }
        </div>
    )
}

export default IncomeSource;