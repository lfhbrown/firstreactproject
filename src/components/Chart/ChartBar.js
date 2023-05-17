import React from "react";

import "./ChartBar.css";

export default function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; //built in to the div on 14 is a style prop set equal to the barFillHeight which starts off at 0, with a condition that if the maxValue of an expense object is greater than 0, the barFillHeight will adjust releative to the max value * 100
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} //double curly brackets because the style expects to receive an object that is output dynamically, and objects are initiated in JS with {}, therefore 2 sets of {}
        ></div>
      </div>
      <div className="chart-bar___label">{props.label}</div>
    </div>
  );
}
