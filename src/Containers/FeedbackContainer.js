import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import myData from "../resultados_totales.json";
import { RiQuestionnaireFill } from "react-icons/ri";

const FeedbackContainer = () => {
    const firstColor='#da6008';
    const secondColor='#ee8f59 ';
    return (
        <>
            <CardItem
                id='feedback'
                className='feedback-card'
                title='Feedback'
            />
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                    <h1>Feedback</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                            <BarChart 
                            chartInfo={myData.duracion} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                          </div>
                          <span><RiQuestionnaireFill /> ¿Cómo sientes que fue la duración de esta encuesta?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                        <BarChart 
                          chartInfo={myData.dificultad} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Qué tan difícil fue completar esta encuesta?. </span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                        <BarChart 
                          chartInfo={myData.evaluacion} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Con cuantas estrellas evaluarías esta encuesta?</span>
                </div>
            </Container>
        </>

    )
}

export default FeedbackContainer;