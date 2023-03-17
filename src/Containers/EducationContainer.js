import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from "../resultados_totales.json";
import { RiQuestionnaireFill } from "react-icons/ri";

const EducationContainer = () => {
    const firstColor='#2c52b2';
    const secondColor='#5d88f3';
  
    return (
        <>
            <CardItem
                id='education-info'
                className='education-card'
                title='Educación, Trabajo y Carrera'
            />
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                    <h1>Educación, Trabajo y Carrera</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                            <BarChart 
                            chartInfo={myData.educacion}
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                          </div>
                          <span><RiQuestionnaireFill /> ¿Cuál de los siguientes es tu nivel de educación completado?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-1" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                            chartInfo={myData.aprendizaje}
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        <span><RiQuestionnaireFill /> ¿Cómo obtuviste tus conocimientos de tecnología? Selecciona todos los que apliquen</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-1" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <BarChart 
                            chartInfo={myData.elearning}
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        </div>
                        <span><RiQuestionnaireFill /> ¿Cuáles son tus plataformas para aprender preferidas?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                            chartInfo={myData.experiencia} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        <span><RiQuestionnaireFill /> Sin incluir tu educación, ¿cuántos años tiene de trabajar en tecnología?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                            chartInfo={myData.trabajoTipo} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        <span><RiQuestionnaireFill /> ¿Cuál de los siguientes describe tu trabajo actual?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <BarChart 
                            chartInfo={myData.empleadosAprox} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                          />
                        </div>
                        <span><RiQuestionnaireFill /> Sin incluir tu educación, ¿cuántos años tiene de trabajar en tecnología?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center" >
                          <BarChart
                            chartInfo={myData.compensacionMensual}
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        </div>
                        <span><RiQuestionnaireFill /> ¿Cuál es tu compensación laboral anual sin descontar impuestos?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <BarChart 
                            chartInfo={myData.frequenciaDeSalario} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        </div>
                        <span><RiQuestionnaireFill /> ¿Cómo recibes tu compensación laboral?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                            chartInfo={myData.certs} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        <span><RiQuestionnaireFill /> ¿Tienes alguna certificación de las siguientes tecnologías?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <BarChart 
                            chartInfo={myData.empresaTipo} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        </div>
                        <span><RiQuestionnaireFill /> ¿Cuál de las siguientes define mejor la empresa para la que trabajas?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <DonutChart 
                            chartInfo={myData.lenguajesHablar} 
                         
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        </div>
                        <span><RiQuestionnaireFill /> ¿Con cuál lenguaje te comunicas profesionalmente?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <DonutChart 
                            chartInfo={myData.nivelDeIngles} 
                           
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        </div>
                        <span><RiQuestionnaireFill /> ¿Cuál es tu nivel de ingles?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
              
                          <BarChart 
                            chartInfo={myData.inglesLearning} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                        <span><RiQuestionnaireFill /> ¿Cómo aprendiste a hablar inglés?</span>
                </div>
            </Container>

        </>
    )
}

export default EducationContainer;