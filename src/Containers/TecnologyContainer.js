import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from "../resultados_totales.json";
import { RiQuestionnaireFill } from "react-icons/ri";

const TecnologyContainer = () => {
    const firstColor='#9d3030';
    const secondColor='#e35050';
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
                        <BarChart 
                          chartInfo={myData.lenguajesProgramar} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                          <span><RiQuestionnaireFill /> ¿Con cuál de los siguientes lenguajes de programación, scripting o markup has trabajado extensivamente durante el ultimo año?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.cloud} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <span><RiQuestionnaireFill /> ¿Con cuál de los siguientes proveedores de nube has trabajado extensivamente durante el ultimo año?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.webFrameworks} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <span><RiQuestionnaireFill /> ¿Con cuál de las siguientes frameworks y tecnologías web has trabajado extensivamente durante el ultimo año?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.libs} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <span><RiQuestionnaireFill /> ¿Con cuál de las siguientes frameworks y librerías has trabajado extensivamente durante el ultimo año?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.devTools} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <span><RiQuestionnaireFill /> ¿Con cuál de las siguientes herramientas de desarrollo has trabajado extensivamente durante el ultimo año?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <DonutChart 
                            chartInfo={myData.os} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Cuál es el principal sistema operativo que usas para trabajar?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <BarChart 
                            chartInfo={myData.git} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Cuál sistema de control de versiones usas?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <BarChart 
                            chartInfo={myData.versionControl} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Qué servicio para sistema de control usas?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <BarChart 
                            chartInfo={myData.blockchain} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                          </div>
                        <span><RiQuestionnaireFill />¿Cómo es tu opinión sobre blockchain, crypto y Web3?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                        <DonutChart 
                          chartInfo={myData.infosec} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Tienes alguna educación o entrenamiento en seguridad informática?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                          <BarChart 
                            chartInfo={myData.implementaciones} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Cuál de las siguientes opciones es implementada donde trabajas?</span>
                </div>
            </Container>
        </>

    )
}

export default TecnologyContainer;