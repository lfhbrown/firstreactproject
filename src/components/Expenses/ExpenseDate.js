import "./ExpenseDate.css";

/*A great way to think of React is like a matryoshka doll, a set of wooden dolls of decreasing size placed one inside another. React is nested logic inside of a finished display
that keeps our code compartmentalized and clean. This component (ExpenseDate) is at the base of our ExpenseItemDisplay component, the smallest doll.*/

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day =
    Number(props.date.toLocaleString("en-US", { day: "2-digit" })) + 1;
  const year = props.date.getFullYear();
  console.log(day);
  console.log(props.date);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
