import './App.css';
import ExpenseSource from './Components/ExpenseSource';
import IncomeSource from './Components/IncomeSource';
import Target from './Components/Target';
import TransferForSaving from './Components/TransferForSaving';

function App() {
  return (
    <main>
      <div className="container-sources">
        <IncomeSource />
        <ExpenseSource />
        <Target />
      </div>
      <TransferForSaving />
    </main>
  );
}

export default App;
