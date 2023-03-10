import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
  

import '../Components/styles/Charts.css'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = ({chartInfo, firstColor, secondColor}) => {

    const options = {
        type: 'polarArea',
        options: {
          responsive: true,
          ticks: {
            display: false,
        },
        grid: {
                display: false,
                lineWidth: 7,
                tickMarkLength: 30// Adjusts the height for the tick marks area
        },
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Polar Area Chart'
            }
          }
        },
      };

  if(chartInfo) {
    let labels = Object.keys(chartInfo);

  
    const data = {
      labels,
      datasets: [
        {
          data: labels.map((item) => chartInfo[item]),
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)',
          ],
        }
      ],
    };

    return <PolarArea options={options} data={data} />;
  } else {
    return (<>
      <div><h1>404</h1></div>
    </>)
  }
}

export default PolarChart;