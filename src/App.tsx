import React from 'react';
import { useState } from 'react';
import './App.css';
import ExpenseSource from './Components/ExpenseSource';
import IncomeSource from './Components/IncomeSource';
import Target from './Components/Target';
import TransferForSaving from './Components/TransferForSaving';
import { Balance } from './Types/Balance';
import Header from './Components/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

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

export default App;
