import Button from "./UI/Button";
import Input from "./UI/Input";
import './../styles/saving-transfer.css';
import { BalanceType } from "../Types/BalanceType";
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

    // ----------------useEffect--------------
    useEffect(()=>{
        const incomes = balance.incomes.reduce((total,income)=> total + income.amount ,0);
        const expense = balance.expense.reduce((total,expens)=> total + expens.amount ,0);
        const current = incomes - expense - savingAmount ;
        setCurrentBalance(current);
    });

    // ----------------HANDLERS--------------
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        if( Number(transferRef.current?.value) > currentBalance ){
            console.log('noooooooooooo'); //toast a message instead of console
            return false;
        }
        if(transferRef.current){
            setSavingAmount(savingAmount + Number(transferRef.current.value));
            transferRef.current.value = '';
        }
    }
    console.log(currentBalance)
    
    return (
        <form className="saving" onSubmit={handleSubmit}>
            <p className="saving__balance">Current balance: {currentBalance}</p>
            <label htmlFor="transfer">
                Transfer to saving account
                <div className="transfer">
                    <Input ref={transferRef} type="number" id="transfer" name="transfer" placeholder="Enter a value to transver"/>
                    <Button>Transfer</Button>
                </div>
            </label>
        </form>
    )
}

export default TransferForSaving;