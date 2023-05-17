import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPoints = props.dataPoints.map((dataPoint) => dataPoint.value); //maps over dataPoints which is a prop object passed from ExpenseChart.js (chartDataPoints) and passedin a function to return the value of each object in an array
  const totalMaximum = Math.max(...dataPoints); //Math.max() returns the maximum value from a list of numbers passed as arguments. Because Math.max expects a list of arguments, and not an array, we use the spread operator to pass in the values as individual arguments.

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
