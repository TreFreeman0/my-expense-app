import { useState } from "react";
import ExpensesFilter from "../filterExpenses/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020')

  const filteredDate = (year) => {
    setFilterYear(year);
    console.log(year)
    console.log(`Here listed is the year ${filterYear}`)
  }

  return (
    <div>
    <ExpensesFilter selectedYear={filterYear} showYearHandled ={filteredDate}/>
    <Card className="expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      />
    </Card>
    </div>

  );
};

export default Expenses;
