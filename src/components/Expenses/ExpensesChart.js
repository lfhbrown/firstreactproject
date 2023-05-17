import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    //for of loop that iterates over the expense object in App.js
    const expenseMonth = expense.date.getMonth(); //assigns the month for each expense to expenseMonth
    dataPoints[expenseMonth].value += expense.amount; // changes the value in the dataPoints object for each index based on the month and the amount for that month from our expense object in App.js
  }
  return <Chart dataPoints={dataPoints} />;
}; //makes the dataPoints object a prop which can be accessed by other components with props.dataPoints

export default ExpensesChart;
