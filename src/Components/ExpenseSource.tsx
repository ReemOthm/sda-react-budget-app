import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import {SourceType } from "../Types/SourceType";
import {BalanceType } from "../Types/BalanceType";
import '../styles/expense-source.css';

import { FaDeleteLeft } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';
interface IProps {
    balance: BalanceType,
    setBalance: (sources:BalanceType)=>void
}

const ExpenseSource = ({ balance, setBalance}:IProps)=>{
    
    // ------------STATES-------------
    const [expenseSources, setExpenseSources] = useState<SourceType[]>([]);

    // -----------useEffect-----------------
    useEffect(()=>{
        setBalance({...balance, expense: expenseSources});
    },[expenseSources]);
    
    // ------------REFERENCES-------------
    const sourceRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);

    // ------------HANDLERS-------------
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        if(sourceRef.current &&  amountRef.current && dateRef.current){
            const expense = {
                id: uuidv4(),
                source: sourceRef.current.value,
                amount: Number(amountRef.current.value),
                date: new Date(dateRef.current.value),
            }

            setExpenseSources(prev=> [...prev, expense]);

            sourceRef.current.value = '';
            amountRef.current.value = '';
            dateRef.current.value  = '';        
        }
    }

    const handleDelete = (id:string)=>{
        setExpenseSources(prev=> prev.filter(e=> e.id !== id));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="bill">
                    Expense source
                    <Input ref={sourceRef} type="text" name="bill" id="bill" placeholder="Electricity bill" required/>
                </label>
                <label htmlFor="expense__amount">
                    Amount of expense
                    <Input ref={amountRef} type="numer" name="expense__amount" id="expense__amount" required/>
                </label>
                <label htmlFor="expense__date">
                    Date of expense
                    <Input ref={dateRef} type="date" name="expense__date" id="expense__date" required/>
                </label>
                <Button>Add expense</Button>
            </form>
            {expenseSources.length > 0 ? 
                <ul>
                    {expenseSources.map((expense)=>{
                        return  <li className="expense-li" key={expense.id}>
                            <span>{expense.source}: {expense.amount}EUR on {expense.date.toDateString()}</span>
                            <span title="Delete expense?" className="icon--delete" onClick={()=>handleDelete(expense.id)}><FaDeleteLeft /></span>
                        </li>
                    })}
                </ul>
            : <p className="text--center">No expense source</p>
            }
        </div>
    )
}

export default ExpenseSource;