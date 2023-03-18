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

    const text = {
        title: 'Información Básica',
        chartTitle: 'Chart Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.',
        question1: '¿Cuál de los siguientes describe tu situación de empleo?',
        question2: '¿Cuál de las siguientes opciones te describe mejor?',
        question3: '¿Cómo describes tu modalidad de trabajo?'
    }

    return (
        <>
            <CardItem
                id='basic-info'
                className='basic-info-card'
                title='Información Básica'
            />

    {/* Question 1 */}
            <Container className='primary-text'>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex'>
                    <p className='title title-size'>{text.title}</p>
                        <h2 className='white chart-title-size'>{text.chartTitle}</h2>
                            <div className='col'>
                                <p>{text.text}</p>
                            </div>
                            <div className='col'></div>
                </div>
                <hr className="hr border border-white border-1" />
                <div className="chart-container d-flex justify-content-center">
                    <BarChart
                        chartInfo={myData.situacionDeEmpleo}
                        firstColor={firstColor}
                        secondColor={secondColor}
                    />
                </div>
                <div className='my-5 question'><span><RiQuestionnaireFill /> {text.question1}</span></div>
            </Container>

    {/* Question 2 */}
            <Container className='pt-2 primary-text'>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex'>
                    <p className='title title-size'>{text.title}</p>
                        <h2  className='white chart-title-size'>{text.chartTitle}</h2>
                            <div className='col'>
                                <p>{text.text}</p>
                            </div>
                            <div className='col'></div>
                </div>
                <hr className="hr border border-white border-1" />
                <div className="chart-container d-flex justify-content-center">
                    <BarChart
                        chartInfo={myData.softwareDev}
                        firstColor={firstColor}
                        secondColor={secondColor}
                    />
                </div>
                <div className='my-5 question'><span><RiQuestionnaireFill /> {text.question2}</span></div>
            </Container>

     {/* Question 3 */}
            <Container className='pt-2 primary-text'>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex'>
                    <p className='title title-size'>{text.title}</p>
                        <h2 className='white chart-title-size'>{text.chartTitle}</h2>
                            <div className='col'>
                                <p>{text.text}</p>
                            </div>
                            <div className='col'></div>
                </div>
                <hr className="hr border border-white border-1" />
                <div className="chart-container d-flex justify-content-center">
                    <DonutChart
                        chartInfo={myData.modalidadDeTrabajo}
                        firstColor={firstColor}
                        secondColor={secondColor}
                    />
                </div>
                <div className='my-5 question'><span><RiQuestionnaireFill /> {text.question3}</span></div>
            </Container>
        </>
    )
}

export default BasicContainer;