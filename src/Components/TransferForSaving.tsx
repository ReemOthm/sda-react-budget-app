import Button from "./UI/Button";
import Input from "./UI/Input";
import './../styles/saving-transfer.css';
import { Balance } from "../Types/Balance";
import { useEffect, useState } from "react";
import { notifySuccess } from "../Tostify";

import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
    balance: Balance,
    savingAmount: number,
    setSavingAmount: (saveAmount:number)=> void
}

type Transfer = {
    amount: number
}

const TransferForSaving = ({balance,savingAmount,setSavingAmount}:Props)=>{

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Transfer>({ defaultValues: { amount: 0} });

    // ----------------STATES----------------
    const [currentBalance, setCurrentBalance] = useState(0);

    // ----------------useEffect--------------
    useEffect(()=>{
        const incomes = balance.incomes.reduce((total,income)=> total + income.amount ,0);
        const expense = balance.expense.reduce((total,expens)=> total + expens.amount ,0);
        const saving = savingAmount;
        let current = incomes - expense  ;
        if(current > 0){
            current -= saving;
        }
        setCurrentBalance(current);
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [formState, reset])

    // ----------------HANDLERS--------------
    const onSubmit: SubmitHandler<Transfer> = (data) =>{ 
        setSavingAmount(savingAmount + Number(data.amount));
        notifySuccess('Transfered to saving account Successfully!');
    }

    return (
        <form className="saving" onSubmit={handleSubmit(onSubmit)}>
            <p className="saving__balance">Current balance: {currentBalance}</p>
            <label htmlFor="transfer_amount">
                Transfer to saving account
                <div className="transfer">
                    <Input 
                    type="number" 
                    id="transfer_amount" 
                    placeholder="Enter a value to transver"
                    {...register('amount',{
                        min: {value: 1,
                            message: 'amount must be a positive number and more than 0' 
                        },
                        max: {
                            value: currentBalance,
                            message: "No enough balance! \nSaving amount is greater than your balance"
                        }
                    })}
                    required
                    />
                    {errors.amount && <span className="error-message">{errors.amount.message}</span>}
                    <Button>Transfer</Button>
                </div>
            </label>
        </form>
    )
}

export default TransferForSaving;