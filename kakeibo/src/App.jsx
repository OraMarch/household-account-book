import { useEffect, useState } from 'react'
import './App.css'
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';

function App() {
  const [list, setList] = useState([]);

  const totalncome = list.filter(item => item.type === "収入").reduce((sum, item) => sum + Number(item.expense), 0);
  const totalExpense = list.filter(item => item.type === "支出").reduce((sum, item) => sum + Number(item.expense), 0)
  const balance = totalncome - totalExpense;

  return (
   <div className="wrap">
      <ExpenseForm setList={setList} list={list}/>
      <ExpenseList list={list}/>
      <div>収入{totalncome}</div>
      <div>支出{totalExpense}</div>
      <div>残り{balance}</div>
    </div>
  )
}

export default App
