import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, ChartDataLabels
);

const BarChart = ({chartInfo, autoSkipp, firstColor, secondColor}) => {

  const options = {
    indexAxis: 'y',
    
    scales: { 
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          autoSkip: autoSkipp,
          color: 'white',
          align: 'end',
          font: {
            size: 15,
            family: 'Roboto'
          }
        }
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        }
      }

    },
    responsive: true,
    layout: {
      padding: {
        right: 50
      }
    },
      plugins: {
        legend: {
          display: false,
          position: 'right'
        },
        title: {
          display: false,
        },
        
        datalabels: {
          formatter: (value, ctx) => {
            const datapoints = ctx.chart.data.datasets[0].data
            const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
            const percentage = value / total * 100
            return percentage.toFixed(2) + "%";
          },
          anchor: 'end',
          align: 'right',
          color: 'white',
          font: {
            weight: 'bold'
          },
        },
      },
    
  };

  if(chartInfo) {
    let labels = Object.keys(chartInfo);
      function getGradient(ctx, chartArea) {
          const gradientBg = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
          gradientBg.addColorStop(0, firstColor);
          gradientBg.addColorStop(0, firstColor);
          gradientBg.addColorStop(0.5, secondColor);
          gradientBg.addColorStop(1, secondColor);
          return gradientBg;
        }
      
    const data = {
      labels,
      datasets: [
        {
          label: 'Cantidad de respuestas',
          data: labels.map((item) => chartInfo[item]),
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
            if(!chartArea) {
              return null
            };
            return getGradient(ctx, chartArea, scales)
          },
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 0.9,
          categoryPercentage: 1
        }
      ],
    };

    return <Bar data={data}  options={options} />;
  } else {
    return (<>
      <div><h1>404</h1></div>
    </>)
  }
}

export default BarChart;