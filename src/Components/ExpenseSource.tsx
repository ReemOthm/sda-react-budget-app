import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "./ui/Button";
import Input from "./ui/Input";
import {Source } from "../types/Source";
import {Balance } from "../types/Balance";
import '../styles/expense-source.css';
import { notifySuccess } from "../Tostify";
import { Inputs } from "../types/Inputs";
import { SourceSchema } from "../types/SourceSchema";


interface Props {
    balance: Balance,
    setTotalBalance: (sources:Balance)=>void
}

const ExpenseSource = ({ balance, setTotalBalance}:Props)=>{

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>(
        { defaultValues: { source: "", amount: 0, date: '' } ,
        resolver: zodResolver(SourceSchema)
    });
    
    // ------------STATES-------------
    const [expenseSources, setExpenseSources] = useState<Source[]>([]);

    // -----------useEffect-----------------
    useEffect(()=>{
        setTotalBalance({...balance, expense: expenseSources});
    },[expenseSources]);
    
    // ------------HANDLERS-------------
    const onSubmit: SubmitHandler<Inputs> = (data) =>{ 
        const expense = {
            id: uuidv4(),
            source: data.source,
            amount:data.amount,
            date: new Date(data.date),
        }
        setExpenseSources(prev=> [...prev, expense]);
        
        notifySuccess('Expense has added Successfully!');

        reset();
    }

    const handleDelete = (id:string)=>{
        setExpenseSources(prev=> prev.filter(e=> e.id !== id));
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="expense_source">
                    Expense source
                    <Input 
                    type="text" 
                    id="expense_source" 
                    placeholder="Electricity bill" 
                    {...register('source')}
                    />
                    {errors.source && <span className="error-message">{errors.source.message}</span>}
                </label>
                <label htmlFor="expense_amount">
                    Amount of expense
                    <Input 
                    type="number" 
                    id="expense_amount" 
                    {...register('amount')}
                    />
                    {errors.amount && <span className="error-message">{errors.amount.message}</span>}
                </label>
                <label htmlFor="expense_date">
                    Date of expense
                    <Input 
                    type="date" 
                    id="expense_date" 
                    {...register('date')}
                    />
                    {errors.date && <span className="error-message">{errors.date.message}</span>}
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