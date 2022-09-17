import "./ExpenseItemDisplay.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseItemDisplay(props) {
  console.log(props);
  return (
    <div className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default ExpenseItemDisplay;
