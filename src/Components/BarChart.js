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

const BarChart = ({ chartInfo, autoSkipp}) => {

  if (chartInfo) {
    let labels = Object.keys(chartInfo);
    const data = {
      labels,
      datasets: [
        {
          label: 'Cantidad de respuestas',
          data: labels.map((item) => chartInfo[item]),
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
            display: true,
          },
          border: {
            display: true,
          },
          ticks: {
            display: false,
            autoSkip: autoSkipp,
            color: 'black',
            align: 'center'
          },
        },
        x: {
          beginAtZero: true,
          grid: {
            display: true,
          },
          border: {
            display: false,
          },
          ticks: {
            display: true,
            color: 'gray',
            font: function (context) {
              var avgSize = Math.round((context.chart.height + context.chart.width) / 2);
              var size = Math.round(avgSize / 32);
              size = size > 12 ? 12 : size; // setting max limit to 12
              return {
                  size: size,
                  weight: 'bold'
              };
          },
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
            return percentage.toFixed(1) + "%";
          }, 
          anchor: 'top',
          align: 'right',
          color: 'white',
          textStrokeColor: 'grey',
          textStrokeWidth: 2,
            font: function (context) {
              var avgSize = Math.round((context.chart.height + context.chart.width) / 2);
              var size = Math.round(avgSize / 32);
              size = size > 12 ? 12 : size; // setting max limit to 12
              return {
                  size: size,
                  weight: 'bold'
              };
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
    <div className='d-flex on-mobile'>
      <div className='labels-container label-size' style={{ width: '35%', marginTop: '10px'}}>
        <table>
          <tbody>
            {legendData.map(({ label, value, color }) => (
              <tr key={label}>
                <td>
                  <div className='d-flex labels'>
                    <div style={{ backgroundColor: color, width: 20, height: 20, marginRight: 10, paddingRight: 20 }}> </div>
                    <div className='label' style={{maxWidth: '300px'}}>{label}</div>
                  </div>
                </td>
                <td className='value-bold'> <div className='value text-center' style={{ marginLeft: 30 }}>{value}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='chart-container align-items-center' style={{ width: '65%' }}>
        <Bar data={data} options={options} className='chart' />
      </div>
    </div>
);
  } else {
  return (<>
    <div><h1>404</h1></div>
  </>)
}
}

export default BarChart;