import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const expenseDataSubmit = (appliedData) => {
        const expenseData = {
            ...appliedData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

  return (
    <div className='new-expense'>
       <ExpenseForm onSaveExpenseData={expenseDataSubmit} />
    </div>
  )
}

export default NewExpense