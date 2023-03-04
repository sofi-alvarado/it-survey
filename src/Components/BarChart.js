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
import myData from "../resultados_totales.json";
import '../Components/styles/Charts.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  
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
          color: 'white',
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
    plugins: {
      legend: {
        display: false,
        position: 'right'
      },
      title: {
        display: false,
      },
    }
  };

  
  let labels = Object.keys(myData.situacionDeEmpleo);


     function getGradient(ctx, chartArea) {
        const gradientBg = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
        gradientBg.addColorStop(0, '#f8aa14');
        gradientBg.addColorStop(0, '#f8aa14');
        gradientBg.addColorStop(0.5, '#f9d98c');
        gradientBg.addColorStop(1, '#f9d98c');
    
        return gradientBg;
      }
    
  const data = {
    labels,
    datasets: [
      {
        data: labels.map((item) => myData.situacionDeEmpleo[item]),
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
        barPercentage: 0.5,
        categoryPercentage: 1
      }
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;