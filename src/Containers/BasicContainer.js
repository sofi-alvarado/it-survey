import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import myData from "../resultados_totales.json";

const BasicContainer = () => {
    const firstColor='#f8aa14';
    const secondColor='#f9d98c';
    return (
        <>
            <CardItem
                id='basic-info'
                className='basic-info-card'
                title='Información Básica'
            />
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                    <h1>Información Básica</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                          chartInfo={myData.situacionDeEmpleo}
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <h5>¿Cuál de los siguientes describe tu situación de empleo?</h5>  
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-1" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                          chartInfo={myData.softwareDev}
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <h5>¿Cuál de las siguientes opciones te describe mejor?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-1" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                          chartInfo={myData.modalidadDeTrabajo}
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <h5>¿Cómo describes tu modalidad de trabajo?</h5>
                </div>
            </Container>

        </>
    )
}

export default BasicContainer;