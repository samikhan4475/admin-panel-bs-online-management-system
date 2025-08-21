import React from "react";
import ReactApexChart from "react-apexcharts";
import "./area-chart.css"; // ✅ import CSS

// Example dataset: Monthly student enrollments
const sampleSeriesData = {
  admissions: {
    counts: [120, 150, 180, 200, 250, 300, 280, 320, 350, 400, 420, 450],
    dates: [
      "01 Jan 2025",
      "01 Feb 2025",
      "01 Mar 2025",
      "01 Apr 2025",
      "01 May 2025",
      "01 Jun 2025",
      "01 Jul 2025",
      "01 Aug 2025",
      "01 Sep 2025",
      "01 Oct 2025",
      "01 Nov 2025",
      "01 Dec 2025",
    ],
  },
};

const AreaChart = () => {
  const [state] = React.useState({
    series: [
      {
        name: "Enrollments",
        data: sampleSeriesData.admissions.counts,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3 },
      title: {
        text: "Student Enrollment Trend (2025)",
        align: "center",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#4e73df",
        },
      },
      subtitle: {
        text: "Monthly Admissions Growth",
        align: "center",
        style: {
          fontSize: "14px",
          color: "#6c757d",
        },
      },
      labels: sampleSeriesData.admissions.dates,
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            fontSize: "12px",
            colors: "#374151",
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
      legend: {
        position: "top",
        horizontalAlign: "center",
        fontSize: "13px",
        labels: { colors: "#374151" },
      },
      colors: ["#36b9cc"],
    },
  });

  return (
    <div className="area-chart-container">
      <h5 className="m-0 p-2">Growth</h5>

      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export { AreaChart };
