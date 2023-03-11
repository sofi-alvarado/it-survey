import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from "../resultados_totales.json";
import { RiQuestionnaireFill } from "react-icons/ri";

const BasicContainer = () => {
    const firstColor = '#f8aa14';
    const secondColor = '#f9d98c';
    return (
        <>
            <CardItem
                id='basic-info'
                className='basic-info-card'
                title='Información Básica'
            />
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                    <h1>Información Básica</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                    <div className="col chart-container d-flex justify-content-center">
                        <BarChart
                            chartInfo={myData.situacionDeEmpleo}
                            firstColor={firstColor}
                            secondColor={secondColor}
                        />
                    </div>
                    <span><RiQuestionnaireFill /> ¿Cuál de los siguientes describe tu situación de empleo?</span>

                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-1" />
                <div className='row d-flex primary-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                    <div className="col chart-container d-flex justify-content-center">
                        <BarChart
                            chartInfo={myData.softwareDev}
                            firstColor={firstColor}
                            secondColor={secondColor}
                        />
                    </div>
                    <span><RiQuestionnaireFill /> ¿Cuál de las siguientes opciones te describe mejor?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-1" />
                <div className='row d-flex primary-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                    <div className='col chart-container d-flex justify-content-center'>
                        <DonutChart
                            chartInfo={myData.modalidadDeTrabajo}
                            firstColor={firstColor}
                            secondColor={secondColor}
                        />
                    </div>
                    <span><RiQuestionnaireFill /> ¿Cómo describes tu modalidad de trabajo?</span>
                </div>
            </Container>

        </>
    )
}

export default BasicContainer;