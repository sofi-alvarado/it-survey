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
            '#2c52b2',
            '#f8aa14',
            '#9d3030',
            '#1ab032',
            '#ee8f59',
          ],
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 0.6,
          categoryPercentage: 0.7,
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
            color: 'white',
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
            color: 'white',
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
          <div className='white-font'>{label}</div>
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