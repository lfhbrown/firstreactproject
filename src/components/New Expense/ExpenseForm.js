import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //Prevents page from reloading because when form submit button is clicked, it defaults reloads the entire page

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //'Date' is a built in method where we can pass the entered date string which it will parse through and turn into a date object
    };
    props.onSaveExpenseData(expenseData); //This is a custom prop which is a function in NewExpense line 18, used to pass the data from our change handlers for title, amount, and date up to the parent component where they are rendered
    setEnteredTitle(""); //Example of 2 way binding. On line 43 we set the value back to enteredTitle which we are returning to its original state (and empty string) by calling setEnteredTitle("")
    setEnteredAmount(""); // ^^ this will override the user input stored if the title was updated changing it back to a string so that when the form is submitted, it will save the object, but
    setEnteredDate(""); // ^^ clear the input so that we start with our original state of an empty text input.
  };

  return (
    //the event listener is on the form instead of the button because when a button type="submit" will emit an event which we can listen; line 37
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler} //onChange is prop that is used to update the state of an input element, checkbox, or select box. It's typically used in combination with the value prop to create a "controlled component"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.stopEditing}>
            Cancel
          </button>{" "}
          {/*props.stopEditing points to a function in NewExpense.js that controls state for whether the ExpenseForm component is rendered or not*/}
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
