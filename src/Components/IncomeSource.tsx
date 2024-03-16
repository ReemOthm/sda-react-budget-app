import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "./ui/Button";
import Input from "./ui/Input";
import { Balance } from "../types/Balance";
import { Source } from "../types/Source";
import '../styles/incomes-source.css';
import { notifySuccess } from "../Tostify";
import { Inputs } from "../types/Inputs";

interface Props{
    balance: Balance,
    setTotalBalance: (prev : Balance) => void,
}

const IncomeSource = ({balance,setTotalBalance}:Props)=>{

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>({ defaultValues: { source: "", amount: 0, date: '' } });

    // ------------STATES-------------
    const [incomeSources, setIncomeSources] = useState<Source[]>([]);

    // -----------useEffect-----------------
    useEffect(()=>{ 
        setTotalBalance({...balance, incomes: incomeSources});
    },[incomeSources]);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [formState, reset])
    
    //------------HANDLERS-------------
    const onSubmit: SubmitHandler<Inputs> = (data) =>{ 
        const income = {
            id: uuidv4(),
            source: data.source,
            amount: Number(data.amount),
            date: new Date(data.date),
        }
        setIncomeSources(prev=> [...prev, income]);
        
        notifySuccess('Income has added Successfully!');
    }

    const handleDelete = (id:string)=>{
        setIncomeSources(prev=> prev.filter(e=> e.id !== id));
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="income_source">
                    Income source
                    <Input 
                    type="text" 
                    id="income_source" 
                    placeholder="Salary" 
                    {...register('source',{
                        required: 'This field is required',
                        minLength: {value: 4, message: "income must be more than 4 characters"}
                    })}
                    />
                    {errors.source && <span className="error-message">{errors.source.message}</span>}
                </label>
                <label htmlFor="income_amount">
                    Amount of income
                    <Input 
                    type="number" 
                    id="income_amount" 
                    {...register('amount',{
                        required: 'This field is required',
                        min: {value: 1, message: "amount must be a positive number and more than 0"}
                    })}
                    />
                    {errors.amount && <span className="error-message">{errors.amount.message}</span>}
                </label>
                <label htmlFor="income_date">
                    Date of income
                    <Input 
                    type="date" 
                    id="income_date" 
                    {...register('date',{
                        required: 'This field is required',
                    })}
                    />
                    {errors.date && <span className="error-message">{errors.date.message}</span>}
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