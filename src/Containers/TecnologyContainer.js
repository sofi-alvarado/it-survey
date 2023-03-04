import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import myData from "../resultados_totales.json";
import '../Components/styles/Charts.css'

export const options = {
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
            autoSkip: false,
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
        position: 'right',
        labels: {
          font: {
            size: 15,
            color: 'pink'
          }
        }
      },
      title: {
        display: false,
      },
    }
  };

  const labels = Object.keys(myData.lenguajesProgramar);
 
  export const data = {
    labels,
    datasets: [
      {
        data: labels.map((item) => myData.lenguajesProgramar[item]),
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea, scales } = chart;
          if(!chartArea) {
            return null
          };
          return getGradient(ctx, chartArea, scales)
        },
        borderRadius: 4,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 1.5
      }
    ],
  };

  function getGradient(ctx, chartArea) {
    const gradientBg = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
    gradientBg.addColorStop(0, '#9d3030');
    gradientBg.addColorStop(0, '#9d3030');
    gradientBg.addColorStop(0.5, '#e35050');
    gradientBg.addColorStop(1, '#e35050');

    return gradientBg;
  }

const TecnologyContainer = () => {
    return (
        <>
            <CardItem
                id='tecnology'
                className='tecnology-card'
                title='Tecnología y Cultura'
            />
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                    <h1>Tecnología y Cultura</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart options={options} data={data} />
                        
                        <h1>¿Cuál de los siguientes describe tu situación de empleo?</h1>
                </div>
            </Container>

        </>

    )
}

export default TecnologyContainer;