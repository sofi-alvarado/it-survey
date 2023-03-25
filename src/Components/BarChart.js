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

const BarChart = ({ chartInfo, autoSkipp, firstColor, secondColor }) => {

  if (chartInfo) {
    let labels = Object.keys(chartInfo);
  

    const backgroundOne = (ctx, chartArea) => {
      const gradientBg = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
      gradientBg.addColorStop(0, firstColor);
      return gradientBg;
    }

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
          /*backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
            if(!chartArea) {
              return null
            };
            return getGradient(ctx, chartArea, scales)
          }, */
          backgroundColor: [
            '#113f67',
            '#39577e',
            '#597096',
            '#788aae',
            '#97a6c7',
            '#b7c2e0',
            '#d7dffa',
            '#cdd6f3',
            '#c4cded',
            '#bbc3e6',
            '#b3bae0',
            '#aab1da',
            '#a2a8d3',
            '#b1afd8',
            '#bfb7dd',
            '#ccbfe1',
            '#d8c8e6',
            '#e3d0eb',
            '#eed9f0',
            '#e8c4e4',
            '#e3afd6',
            '#e099c6',
            '#dc82b3',
            '#d96a9e',
            '#d45087',
          ],
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 1.0,
          categoryPercentage: 0.9,
       
        }
      ],
    };


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
            display: function(context) {
              return context.chart.width > 1200;
            },
            autoSkip: autoSkipp,
            color: 'black',
            align: 'center',
            font: {
              family: 'Roboto',
              size: 15
            },
          },
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
          right: 50,
          top: 10
        }
      },
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
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
            color: 'grey',
              font: {
        weight: 'bold',
          size: 12
      },
    },
  },

};

const legendData = Object.entries(data.datasets[0].data).map(([label, value], i) => ({
  label: data.labels[i],
  value,
  color: data.datasets[0].backgroundColor[i],
}));

return (
  <>
    <Bar data={data} options={options} style={{ minHeight: '300px', minWidth: '350px'}} />
    <div className='hide-on-desktop m-4'>
      {legendData.map(({ label, color }) => (
        <div key={label} className='d-flex '>
          <div className='p-0' style={{ backgroundColor: color, width: 15, height: 15, marginRight: 10 }}></div>
          <div className='black-font'>{label}</div>
        </div>
      ))}
    </div>
  </>
);
  } else {
  return (<>
    <div><h1>404</h1></div>
  </>)
}
}

export default BarChart;