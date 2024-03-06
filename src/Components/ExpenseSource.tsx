import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { BalanceType, SourceType } from "../Types";
import { FaDeleteLeft } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';
interface IProps {
    setBalance: (sources:BalanceType)=>void
}

const ExpenseSource = ({setBalance}:IProps)=>{
    
    // ------------STATES-------------
    const [expenseSources, setExpenseSources] = useState<SourceType[]>([]);

    // -----------useEffect-----------------
    useEffect(()=>{
        setBalance(prev=>{
            return {...prev, expense: expenseSources};
        })
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
                <label htmlFor="amount">
                    Amount of expense
                    <Input ref={amountRef} type="numer" name="amount" id="amount" required/>
                </label>
                <label htmlFor="date">
                    Date of expense
                    <Input ref={dateRef} type="date" name="date" id="date" required/>
                </label>
                <Button>Add expense</Button>
            </form>
            {expenseSources.length > 0 ? 
                <ul>
                    {expenseSources.map((expense)=>{
                        return  <li key={expense.id}>
                            <span>{expense.source}: {expense.amount}EUR on {expense.date.toString()}</span>
                            <span title="Delete income?"><FaDeleteLeft className="icon--delete" onClick={()=>handleDelete(expense.id)} /></span>
                        </li>
                    })}
                </ul>
            : <p>No expense source</p>
            }
        </div>
    )
}

export default ExpenseSource;