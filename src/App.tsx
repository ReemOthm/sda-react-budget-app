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

  // const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  // const [isConfirmTrue, setIsConfirmTrue] = useState(false);

  const [savingAmount, setSavingAmount] = useState(0);

  // ------------HANDLERS------------
  // const handelToggleConfirmOpen = ()=> setIsConfirmOpen(prev=> !prev);
  // const handelToggleConfirmTrue = ()=> setIsConfirmTrue(prev=> !prev);

  // const onRemove = ()=>{
  //   if(isConfirmTrue)
  //     return true;
  // }

  return (
    <main>
      <Header />
      <div className="container-sources">
        <IncomeSource  balance={balance} setBalance={setBalance}/>
        <ExpenseSource  balance={balance} setBalance={setBalance} />
        <Target savingAmount={savingAmount} />
      </div>
      <TransferForSaving balance={balance} savingAmount={savingAmount} setSavingAmount={setSavingAmount} />

      {/* {isConfirmOpen === true ? <ConfrmDelete handelToggleConfirmOpen={handelToggleConfirmOpen}  handelToggleConfirmTrue={handelToggleConfirmTrue}/> : null} */}

      <ToastContainer />
    </main>
  );
}

export default App;
