import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ chartInfo }) => {
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
            '#597096',
            '#97a6c7',
            '#d7dffa',
            '#c4cded',
            '#b3bae0',
            '#a2a8d3'
          ],
          borderWidth: 0,
          hoverOffset: 15
        },
      ],
    } //End of data

    const options = {
      layout: {
        padding: 15
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#313030'
          },
        },
        datalabels: {
          formatter: (value, ctx) => {
            const datapoints = ctx.chart.data.datasets[0].data
            const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
            const percentage = value / total * 100
            return percentage.toFixed(0) + '%';
          },
          display: true,
          color: 'white',
          textStrokeColor: 'grey',
          textStrokeWidth: 4,
          font: {
            weight: 'bold'
          },
        }
      }
    } // End of options
  
    return <Doughnut data={data} plugins={[ChartDataLabels]} options={options} style={{maxHeight: '600px'}}/>;
  } else {
    return (<div><h1>404</h1></div>);
  }
}

export default DonutChart;