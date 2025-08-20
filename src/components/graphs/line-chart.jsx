import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './line-chart.css';   // ✅ import CSS file

const LineChart = () => {
  const [state] = React.useState({
    series: [{
      data: [120, 98, 134, 150, 180, 220, 260, 310, 400, 520]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      title: {
        text: 'Admissions by Program',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#4e73df',
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          borderRadiusApplication: 'end',
          horizontal: true,
          distributed: true, // ✅ colorful bars
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
          colors: ['#111827'],
        }
      },
      xaxis: {
        categories: [
          'Computer Science',
          'Business Admin',
          'Engineering',
          'Law',
          'English',
          'Mathematics',
          'Biology',
          'Economics',
          'Psychology',
          'Media Studies'
        ],
        labels: {
          style: {
            fontSize: '13px',
            colors: '#374151',
          }
        }
      },
      colors: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e", "#e74a3b", "#9b59b6", "#2ecc71", "#3498db", "#f39c12", "#d35400"],
    },
  });

  return (
    <div className="line-chart-container">
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export { LineChart }
