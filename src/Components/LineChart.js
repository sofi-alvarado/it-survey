import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineChart = ({ chartInfo, firstColor, secondColor }) => {


  if (chartInfo) {
    let labels = Object.keys(chartInfo);

    const data = {
      labels,
      datasets: [
        {
          label: 'Cantidad de respuestas',
          data: labels.map((item) => chartInfo[item]),
          borderColor: '#5d88f3',
          tension: 0.1,
          
        },
      ],
    };

    const options = {
        responsive: true,
        
        ticks: {
            color: 'white',
            align: 'end',
            font: {
              size: 15,
              family: 'Roboto'
            }
          },
          
        plugins: {
            
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      };


    return <Line data={data} options={options} />;
  } else {
    return (<>
      <div><h1>404</h1></div>
    </>)
  }
}

export default LineChart;