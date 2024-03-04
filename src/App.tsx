import './App.css';
import ExpenseSource from './Components/ExpenseSource';
import IncomeSource from './Components/IncomeSource';

function App() {
  return (
    <div className="container">
      <IncomeSource />
      <ExpenseSource />
    </div>
  );
}

export default App;
