import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import myData from "../resultados_totales.json";

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
                        
                        <h5>¿Con cuál de los siguientes lenguajes de programación, scripting o markup has trabajado extensivamente durante el ultimo año?</h5>
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
                        
                        <h5>¿Con cuál de los siguientes proveedores de nube has trabajado extensivamente durante el ultimo año?</h5>
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
                        
                        <h5>¿Con cuál de las siguientes frameworks y tecnologías web has trabajado extensivamente durante el ultimo año?</h5>
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
                        
                        <h5>¿Con cuál de las siguientes frameworks y librerías has trabajado extensivamente durante el ultimo año?</h5>
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
                        
                        <h5>¿Con cuál de las siguientes herramientas de desarrollo has trabajado extensivamente durante el ultimo año?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.os} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Cuál es el principal sistema operativo que usas para trabajar?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.git} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Cuál sistema de control de versiones usas?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.versionControl} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Qué servicio para sistema de control usas?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.blockchain} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Cómo es tu opinión sobre blockchain, crypto y Web3?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.infosec} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Tienes alguna educación o entrenamiento en seguridad informática?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.implementaciones} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Cuál de las siguientes opciones es implementada donde trabajas?</h5>
                </div>
            </Container>
        </>

    )
}

export default TecnologyContainer;