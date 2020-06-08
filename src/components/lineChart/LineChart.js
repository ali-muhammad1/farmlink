import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const [chartData, setChartData] = useState(props.chartData);

  return (
    <div className="chart">
      <Line
        data={chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Canadian canola stocks",
            fontSize: 25,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default LineChart;
