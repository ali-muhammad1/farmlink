import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  const [chartData, setChartData] = useState(props.chartData);

  return (
    <div className="chart">
      <Bar
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

export default Chart;
