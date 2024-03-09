import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { BalanceType } from "../Types/BalanceType";
import { SourceType } from "../Types/SourceType";
import '../styles/incomes-source.css';

import { FaDeleteLeft } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';

interface IProps{
    balance: BalanceType,
    setBalance: (prev : BalanceType) => void 
}

const IncomeSource = ({balance,setBalance}:IProps)=>{

    // ------------STATES-------------
    const [incomeSources, setIncomeSources] = useState<SourceType[]>([]);

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