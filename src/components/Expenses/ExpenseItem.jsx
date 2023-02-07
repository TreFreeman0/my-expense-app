import "./Expense.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated')
    console.log("Clicked!!!!!");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">${props.amount}</span>
      </div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
}

export default ExpenseItem;
