import React, { useState } from "react";
import NewExpense from "./components/New Expense/NewExpense"; // This is the final display for the expense input for new expenses to be entered and added to the ExpenseItemDisplay component
import ExpenseItemDisplay from "./components/Expenses/ExpenseItemDisplay"; //This is the final display of the list of expenses, including, their name, amount, and the date they were added.

const App = () => {
  const initalState = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(initalState);

  // useState is a hook that allows us to take our initalState variable (6) and store the value as expenses (33). From there I'm able to update the array of objects by calling setExpenses and passing in new data
  // We initialize our useState (33) and pass in the initialState variable which is what expenses is set to when the app renders. When the page loads, it will display the hard coded initialState array of objects
  // setExpenses (33) is what changes the value of expenses. We call setExpenses (40) and pass in the value

  const addExpenseHandler = (newIncomingExpense) => {
    setExpenses((prevExpenses) => {
      return [newIncomingExpense, ...expenses];
    });
  };
  // Here I'm passing in new data (newIncomingExpense) as an argument and spreading in my expenses (which is my initalState array of objects line 6) so that it's added to the front of the array

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemDisplay expenses={expenses} />
    </div>
  );
};

export default App; //Allows this component to be exported and used by the index.js component that does the final rendering of our component files
