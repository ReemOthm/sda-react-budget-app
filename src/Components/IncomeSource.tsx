import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { BalanceType, SourceType } from "../Types";
import { FaDeleteLeft } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';

interface IProps{
    setBalance: (sources:BalanceType)=>void
}

const IncomeSource = ({setBalance}:IProps)=>{

    // ------------STATES-------------
    const [incomeSources, setIncomeSources] = useState<SourceType[]>([]);

    // -----------useEffect-----------------
    useEffect(()=>{
        setBalance(prev=>{
            return {...prev, incomes: incomeSources};
        })
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
                        return  <li key={income.id}>
                            <span>{income.source}: {income.amount}EUR on {income.date.toString()}</span>
                            <span title="Delete income?"><FaDeleteLeft className="icon--delete" onClick={()=>handleDelete(income.id)} /></span>
                        </li>
                    })}
                </ul>
            : <p>No income source</p>
            }
        </div>
    )
}

export default IncomeSource;