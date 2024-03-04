import './App.css';
import ExpenseSource from './Components/ExpenseSource';
import IncomeSource from './Components/IncomeSource';
import Target from './Components/Target';

function App() {
  return (
    <div className="container">
      <IncomeSource />
      <ExpenseSource />
      <Target />
    </div>
  );
}

export default App;
