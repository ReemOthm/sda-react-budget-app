import { useState } from 'react';
import './../../App.css';
import ExpenseSource from '../ExpenseSource';
import IncomeSource from '../IncomeSource';
import Target from '../Target';
import TransferForSaving from '../TransferForSaving';
import { Balance } from '../../Types/Balance';
import Header from '../Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BudgetPage() {

  // ------------STATES-------------
  const [balance, setBalance] = useState<Balance>({
    incomes : [],
    expense: [],
  });

  const [savingAmount, setSavingAmount] = useState(0);

  return (
    <main>
      <Header />
      <div className="container-sources">
        <IncomeSource  balance={balance} setBalance={setBalance}/>
        <ExpenseSource  balance={balance} setBalance={setBalance} />
        <Target savingAmount={savingAmount} />
      </div>
      <TransferForSaving balance={balance} savingAmount={savingAmount} setSavingAmount={setSavingAmount} />

      <ToastContainer />
    </main>
  );
}

export default BudgetPage;
