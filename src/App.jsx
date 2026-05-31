import { useEffect, useState } from 'react'
import './App.css'
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';

function App() {
  const [list, setList] = useState([]);

  const latestIncome = list.filter(item => item.type === "収入").at(-1)?.expense ?? 0;
  const totalExpense = list.filter(item => item.type === "支出").reduce((sum, item) => sum + Number(item.expense), 0)
  const balance = latestIncome - totalExpense;

  // useEffect(() => {
  //   console.log(list.filter(item => item.type === "収入").at(-1)?.expense);
  // }, [latestIncome]);

  return (
   <div className="wrap">
      <ExpenseForm setList={setList} list={list}/>
      <ExpenseList list={list}/>
      <div>収入{latestIncome}</div>
      <div>支出{totalExpense}</div>
      <div>残り{balance}</div>
    </div>
  )
}

export default App