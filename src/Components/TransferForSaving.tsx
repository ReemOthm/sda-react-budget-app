import Button from "./UI/Button";
import Input from "./UI/Input";
import './../styles/TransferForSaving.css';
import { BalanceType } from "../Types";
import { FormEvent, useEffect, useRef, useState } from "react";

interface IProps {
    balance: BalanceType,
    savingAmount: number,
    setSavingAmount: (saveAmount:number)=> void
}

const TransferForSaving = ({balance,savingAmount,setSavingAmount}:IProps)=>{

    // ----------------STATES----------------
    const [currentBalance, setCurrentBalance] = useState(0);

    // ----------------REFERENCES------------
    const transferRef = useRef<HTMLInputElement>(null)

    // ----------------HANDLERS--------------
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        if(transferRef.current){
            setSavingAmount(savingAmount + Number(transferRef.current.value));
            transferRef.current.value = '';
        }
    }

    // ----------------useEffect--------------
    useEffect(()=>{
        const incomes = balance.incomes.reduce((total,income)=> total + income.amount ,0);
        const expense = balance.expense.reduce((total,expens)=> total + expens.amount ,0);
        const current = incomes - expense - savingAmount;
        setCurrentBalance(current);
    });

    console.log(savingAmount)
    return (
        <form className="target-saving" onSubmit={handleSubmit}>
            <p>Current balance: {currentBalance}</p>
            <label htmlFor="transfer">
                Transfer to saving account
                <div>
                    <Input ref={transferRef} type="number" id="transfer" name="transfer" />
                    <Button>Transfer</Button>
                </div>
            </label>
        </form>
    )
}

export default TransferForSaving;