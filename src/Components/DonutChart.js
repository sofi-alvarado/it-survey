import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ chartInfo, firstColor, secondColor }) => {


  if (chartInfo) {
    let labels = Object.keys(chartInfo);

    const data = {
      labels,
      datasets: [
        {
          label: 'Cantidad de respuestas',
          data: labels.map((item) => chartInfo[item]),
          backgroundColor: [
            '#2c52b2',
            '#f8aa14',
            '#9d3030',
            '#1ab032',
            '#ee8f59',
          ],
          borderWidth: 0,
          hoverOffset: 15
        },
      ],
    };

    const options = {
      
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'white'
          },
        },
        layout: {
          padding: 15
        
        },
       
        datalabels: {
          formatter: (value, ctx) => {
            const datapoints = ctx.chart.data.datasets[0].data
            const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
            const percentage = value / total * 100
            return percentage.toFixed(0) + "%";
          },
          display: true,
          color: "white",
          font: {
            weight: 'bold'
          },
        }
      }
      
    }


    return <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />;
  } else {
    return (<>
      <div><h1>404</h1></div>
    </>)
  }
}

export default DonutChart;