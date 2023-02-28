import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import myData from "../resultados_totales.json";
import '../Components/styles/Charts.css'

export const options = {
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right',
      },
      title: {
        display: true,
        text: '¿Cuál de los siguientes describe tu situación de empleo? ',
      },
    },
  };
  
  const labels = Object.keys(myData.situacionDeEmpleo);
  
  export const data = {
    labels,
    datasets: [
      {
        data: labels.map((item) => myData.situacionDeEmpleo[item]),
        backgroundColor: '#f8aa14',
      }
    ],
  };

const BasicContainer = () => {
    return (
        <>
            <CardItem
                id='basic-info'
                className='basic-info-card'
                title='Información Básica'
            />
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center'>
                    <h2 className='primary-text'>Información Básica</h2>
                        <p className='secundary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart options={options} data={data} />
                </div>
            </Container>

        </>

    )
}

export default BasicContainer;