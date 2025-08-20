import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './pie-chart.css';   // ✅ import the CSS file here

const PieChart = () => {
    const [state] = React.useState({
        series: [420, 310, 290, 230, 150],
        options: {
            chart: {
                type: 'donut',
            },
            labels: ['Computer Science', 'Business Admin', 'English', 'Law', 'Engineering'],
            title: {
                text: 'Admissions by Department',
                align: 'center',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#4e73df'
                }
            },
            legend: {
                position: 'right',
                fontSize: '14px',
                labels: {
                    colors: '#374151'
                }
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '13px',
                    fontWeight: 'bold'
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '60%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Total',
                                fontSize: '16px',
                                fontWeight: 600,
                                color: '#111827'
                            }
                        }
                    }
                }
            },
            colors: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e", "#e74a3b"],
            responsive: [{
                breakpoint: 768,
                options: {
                    chart: {
                        width: "100%"
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    });

    return (
        <div className="pie-chart-container">
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="donut"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    )
}

export { PieChart }
