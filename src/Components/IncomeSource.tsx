import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { Balance } from "../Types/Balance";
import { Source } from "../Types/Source";
import '../styles/incomes-source.css';

import { FaDeleteLeft } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';
import { notifySuccess } from "../Tostify";

interface Props{
    balance: Balance,
    setBalance: (prev : Balance) => void,
}

const IncomeSource = ({balance,setBalance}:Props)=>{

    // ------------STATES-------------
    const [incomeSources, setIncomeSources] = useState<Source[]>([]);

    // -----------useEffect-----------------
    useEffect(()=>{ 
        setBalance({...balance, incomes: incomeSources});
    },[incomeSources]);

    // ------------REFERENCES-------------
    const sourceRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    
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

            notifySuccess('Income has added Successfully!');

            sourceRef.current.value = '';
            amountRef.current.value = '';
            dateRef.current.value  = '';
        }
    }

    const handleDelete = (id:string)=>{
        setIncomeSources(prev=> prev.filter(e=> e.id !== id));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="income_source">
                    Income source
                    <Input ref={sourceRef} type="text" name="income_source" id="income_source" placeholder="Salary" required/>
                </label>
                <label htmlFor="income_amount">
                    Amount of income
                    <Input ref={amountRef}  type="number" name="income_amount" id="income_amount" required/>
                </label>
                <label htmlFor="income_date">
                    Date of income
                    <Input ref={dateRef}  type="date" name="income_date" id="income_date" required/>
                </label>
                <Button>Add income</Button>
            </form>
            {incomeSources.length > 0 ? 
                <ul>
                    {incomeSources.map((income)=>{
                        return  <li className="income-li" key={income.id}>
                            <span>{income.source}: {income.amount}EUR on {income.date.toDateString()}</span>
                            <span title="Delete income?" onClick={()=>handleDelete(income.id)} className="icon--delete" ><FaDeleteLeft /></span>
                        </li>
                    })}
                </ul>
            : <p className="text--center">No income source</p>
            }
        </div>
    )
}

export default IncomeSource;