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
    const shortLabels = labels.map(label => label.split(/(?<=^(?:.{15})+)(?!$)/));
    //console.log(shortLabels)

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
          /*backgroundColor: [
            '#2c52b2',
            '#f8aa14',
            '#9d3030',
            '#1ab032',
            '#ee8f59',
          ],*/
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 0.7,
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
            display: true,
            //mirror: true,
            //labelOffset: -12,
            autoSkip: autoSkipp,
            color: 'white',
            align: 'center',
            font: {
            family: 'Roboto',
            //size: 10
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
          right: 5
        }
      },
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
          /*position: 'top',
          onClick: (evt, legendItem, legend) => {
            const index = legend.chart.data.labels.indexOf(legendItem.text);
            legend.chart.toggleDataVisibility(index);
            legend.chart.getDataVisibility(index);
            legend.chart.update();
          },*/
          labels: {
            /*color: 'white',
            generateLabels: (chart) => {
              let visibility = [];
              for (let i = 0; i < chart.data.labels.length; i++) {
                if (chart.getDataVisibility(i) === true) {
                  visibility.push(false)
                } else {
                  visibility.push(true)
                }
              };

              return chart.data.labels.map(
                (label, index) => ({
                  text: label,
                  strokeStyle: chart.data.datasets[0].backgroundColor[index],
                  fillStyle: chart.data.datasets[0].backgroundColor[index],
                  hidden: visibility[index],
                }))
            } */
          }
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

    return <Bar data={data} options={options} />;
  } else {
    return (<>
      <div><h1>404</h1></div>
    </>)
  }
}

export default BarChart;