import { useCallback, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import './../App.css';
import ExpenseSource from '../components/ExpenseSource';
import IncomeSource from '../components/IncomeSource';
import Target from '../components/Target';
import TransferForSaving from '../components/TransferForSaving';
import { Balance } from '../types/Balance';
import Header from '../components/Header';


function BudgetPage() {

  // ------------STATES-------------
  const [balance, setBalance] = useState<Balance>({
    incomes : [],
    expense: [],
  });

  const [savingAmount, setSavingAmount] = useState(0);

  const setSaving = useCallback((amount:number)=>{
    setSavingAmount(amount);
  },[]);

  const setTotalBalance = useCallback((balance: Balance)=>{
    setBalance(balance)
  },[]);

  return (
    <>
      <Header />
      
      <div className="container-sources">
        <IncomeSource  balance={balance} setTotalBalance={setTotalBalance}/>
        <ExpenseSource  balance={balance} setTotalBalance={setTotalBalance} />
        <Target savingAmount={savingAmount} />
      </div>

      <TransferForSaving balance={balance} savingAmount={savingAmount} setSaving={setSaving} />
    </>
  );
}

export default BudgetPage;
