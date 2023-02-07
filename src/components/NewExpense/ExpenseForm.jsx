import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {

const [changeTitle, setChangeTitle] = useState('')
const [changeExpense, setChangeExpense] = useState('')
const [changeDates, setChangeDates] = useState('')
    
const titleChange = (e) => {
    setChangeTitle(e.target.value)
}
const amountChange = (e) => {
    setChangeExpense(e.target.value)
}
const changeDate = (e) => {
    setChangeDates(e.target.value)
}

const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title:changeTitle,
        amount:changeExpense,
        dates: new Date(changeDates)
    }
   props.onSaveExpenseData(expenseData)

    setChangeTitle('') //Reset the input value after submiting values (Two way binding) 
    setChangeExpense('')
    setChangeDates('')
}

  return (
    <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={changeTitle} onChange={titleChange}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={changeExpense} onChange={amountChange}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2023-01-01" max="2026-12-31" value={changeDates} onChange={changeDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm