import React, { useState } from "react";
import "./ExpenseItemDisplay.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const ExpenseItemDisplay = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        filteredYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          );
        })
      ) : (
        <h1>No expenses found</h1>
      )}{" "}
      {/* if props.expenses exists, line 20 map over my expenses array inside of the expenses state in app.js which I am able to access from props.expenses*/}
    </Card>
  );
};

export default ExpenseItemDisplay;
