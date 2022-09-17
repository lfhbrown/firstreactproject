import "./ExpenseItemDisplay.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseItemDisplay(props) {
  //   const { expenses } = props;
  console.log(props);
  return (
    <div className="expenses">
      {props.felix.map((expense) => {
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
