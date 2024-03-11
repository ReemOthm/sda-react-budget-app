import { useState } from 'react';
import './../App.css';
import ExpenseSource from '../Components/ExpenseSource';
import IncomeSource from '../Components/IncomeSource';
import Target from '../Components/Target';
import TransferForSaving from '../Components/TransferForSaving';
import { Balance } from '../Types/Balance';
import Header from '../Components/Header';

import 'react-toastify/dist/ReactToastify.css';

function BudgetPage() {

  // ------------STATES-------------
  const [balance, setBalance] = useState<Balance>({
    incomes : [],
    expense: [],
  });

  const [savingAmount, setSavingAmount] = useState(0);

  return (
    <>
      <Header />
      
      <div className="container-sources">
        <IncomeSource  balance={balance} setBalance={setBalance}/>
        <ExpenseSource  balance={balance} setBalance={setBalance} />
        <Target savingAmount={savingAmount} />
      </div>

      <TransferForSaving balance={balance} savingAmount={savingAmount} setSavingAmount={setSavingAmount} />
    </>
  );
}

export default BudgetPage;
