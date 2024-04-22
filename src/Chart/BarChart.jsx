import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Sales"],
  ["January", 100],
  ["February", 200],
  ["March", 300],
  ["April", 400],
  ["May", 500],
  ["June", 420],
  ["July", 340],
  ["August", 600],
  ["September", 800],
  ["October", 900],
  ["November", 400],
  ["December", 1200],
];

export const options = {
  chart: {
    title: "Month Sales Performance",
    subtitle: "Total Sales : 2023",
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
