import { useState } from 'react';
import './App.css';
import ExpenseSource from './Components/ExpenseSource';
import IncomeSource from './Components/IncomeSource';
import Target from './Components/Target';
import TransferForSaving from './Components/TransferForSaving';
import { BalanceType } from './Types/BalanceType';

function App() {

  // ------------STATES-------------
  const [balance, setBalance] = useState<BalanceType>({
    incomes : [],
    expense: []
  });
  
  const [savingAmount, setSavingAmount] = useState(0);

  console.log(balance);

  return (
    <main>
      <div className="container-sources">
        <IncomeSource setBalance={setBalance} />
        <ExpenseSource setBalance={setBalance} />
        <Target savingAmount={savingAmount} />
      </div>
      <TransferForSaving balance={balance} savingAmount={savingAmount} setSavingAmount={setSavingAmount} />
    </main>
  );
}

export default App;
