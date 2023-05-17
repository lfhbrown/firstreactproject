import React, { useState } from "react"; //Allows import of hooks for interactivity
import "./NewExpense.css"; //Imports New Expense.css component so I can add the class names and customize the component
import ExpenseForm from "./ExpenseForm"; //Imports the ExpenseForm component so that when a new expense is added, the data can be passed from ExpenseForm to this parent component through the onSaveExpenseData prop (16)

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
  };
  const editHandler = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    // ***OPTIONAL*** make this into a modal
    // Line 17 is a custom prop called onSaveExpenseData, which set it to saveExpenseDataHandler on line 6.
    <div className="new-expense">
      {!isEditing && <button onClick={editHandler}>Add New Expense</button>}{" "}
      {/**/}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={savedExpenseDataHandler}
          stopEditing={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
