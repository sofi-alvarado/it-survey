import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const DonutChart = ({chartInfo, firstColor, secondColor}) => {

      if(chartInfo) {
        let labels = Object.keys(chartInfo);
    
        
          
            const data = {
                labels,
                datasets: [
                  {
                    data: labels.map((item) => chartInfo[item]),
                    backgroundColor: [
                      '#2c52b2',
                      '#f8aa14',
                      '#9d3030',
                      'rgba(75, 192, 192)',
                      'rgba(153, 102, 255)',
                      'rgba(255, 159, 64)',
                    ],
                    borderWidth: 0,
                  },
                ],
              };
    
        return  <Doughnut data={data} />;
      } else {
        return (<>
          <div><h1>404</h1></div>
        </>)
      }
}

export default DonutChart;