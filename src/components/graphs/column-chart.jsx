import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

const ColumnChart = () => {
  const [chartData] = useState({
    options: {
      labels: ["A", "B", "C", "D", "E"], // moved labels into options
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [44, 55, 41, 17, 15],
  });

  return (
    <Card className="column-chart-container">
      <div className="donut">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          height={350}
        />
      </div>
    </Card>
  );
};

export { ColumnChart };
