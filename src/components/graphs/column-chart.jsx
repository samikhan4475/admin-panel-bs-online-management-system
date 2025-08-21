import React from "react";
import ReactApexChart from "react-apexcharts";
import "./column-chart.css"; // ✅ import CSS

const ColumnChart = () => {
  const colors = [
    "#4e73df",
    "#1cc88a",
    "#36b9cc",
    "#f6c23e",
    "#e74a3b",
    "#9b59b6",
    "#2ecc71",
    "#ff66c3",
  ];

  const [state] = React.useState({
    series: [
      {
        data: [320, 280, 210, 150, 130, 170, 200, 140],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      title: {
        text: "Enrollments by Department",
        align: "center",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#4e73df",
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "55%",
          distributed: true,
          borderRadius: 6,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "13px",
          fontWeight: "bold",
          colors: ["#111827"],
        },
      },
      legend: { show: false },
      xaxis: {
        categories: [
          "Computer Science",
          "Business Admin",
          "Engineering",
          "Law",
          "English",
          "Economics",
          "Biology",
          "Mathematics",
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: "13px",
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        title: {
          text: "Students",
          style: {
            fontSize: "14px",
            color: "#374151",
          },
        },
      },
    },
  });

  return (
    <div className="column-chart-container">
      <h5 className="m-0 p-2">Programs</h5>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export { ColumnChart };
