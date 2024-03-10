import Button from "./UI/Button";
import Input from "./UI/Input";
import './../styles/saving-transfer.css';
import { Balance } from "../Types/Balance";
import { FormEvent, useEffect, useRef, useState } from "react";
import { notifySuccess } from "../Tostify";

interface Props {
    balance: Balance,
    savingAmount: number,
    setSavingAmount: (saveAmount:number)=> void
}

const TransferForSaving = ({balance,savingAmount,setSavingAmount}:Props)=>{

    // ----------------STATES----------------
    const [currentBalance, setCurrentBalance] = useState(0);

    // ----------------REFERENCES------------
    const transferRef = useRef<HTMLInputElement>(null)

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

    // ----------------HANDLERS--------------
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        if( Number(transferRef.current?.value) > currentBalance ){
            console.log('noooooooooooo'); //error message instead of console
            return false;
        }
        if(transferRef.current){
            setSavingAmount(savingAmount + Number(transferRef.current.value));
            transferRef.current.value = '';
            notifySuccess('Transfered to saving account Successfully!');
        }
    }

    return (
        <form className="saving" onSubmit={handleSubmit}>
            <p className="saving__balance">Current balance: {currentBalance}</p>
            <label htmlFor="transfer_amount">
                Transfer to saving account
                <div className="transfer">
                    <Input ref={transferRef} type="number" id="transfer_amount" name="transfer_amount" placeholder="Enter a value to transver"/>
                    <Button>Transfer</Button>
                </div>
            </label>
        </form>
    )
}

export default TransferForSaving;