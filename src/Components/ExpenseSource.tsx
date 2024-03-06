import { FormEvent, useRef, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { SourceType } from "../Types";
import { v4 as uuidv4 } from 'uuid';
interface IProps {

}

const ExpenseSource = ({}:IProps)=>{
    
    // ------------Refferrences-------------
    const sourceRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);

    // ------------STATES-------------
    const [expenseSources, setExpenseSources] = useState<SourceType[]>([]);
    
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
                        return  <li key={expense.id}>{expense.source}: {expense.amount}EUR on {expense.date.toString()}</li>
                    })}
                </ul>
            : <p>No expense source</p>
            }
        </div>
    )
}

export default ExpenseSource;