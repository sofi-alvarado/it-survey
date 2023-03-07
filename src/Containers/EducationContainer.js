import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import myData from "../resultados_totales.json";

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
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                    <h1>Educación, Trabajo y Carrera</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                          chartInfo={myData.educacion}
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <h5>¿Cuál de los siguientes es tu nivel de educación completado?</h5>
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
                        <h5>¿Cómo obtuviste tus conocimientos de tecnología? Selecciona todos los que apliquen</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-1" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart 
                          chartInfo={myData.elearning}
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <h5>¿Cuáles son tus plataformas para aprender preferidas?</h5>
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
                        
                        <h5>Sin incluir tu educación, ¿cuántos años tiene de trabajar en tecnología?</h5>
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
                        
                        <h5>¿Cuál de los siguientes describe tu trabajo actual?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.empleadosAprox} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>Sin incluir tu educación, ¿cuántos años tiene de trabajar en tecnología?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.compensacionAnual} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Cuál es tu compensación laboral anual sin descontar impuestos?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.frequenciaDeSalario} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Cómo recibes tu compensación laboral?</h5>
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
                        
                        <h5>¿Tienes alguna certificación de las siguientes tecnologías?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.empresaTipo} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Cuál de las siguientes define mejor la empresa para la que trabajas?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.lenguajesHablar} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Con cuál lenguaje te comunicas profesionalmente?</h5>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.nivelDeIngles} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        
                        <h5>¿Cuál es tu nivel de ingles?</h5>
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
                        
                        <h5>¿Cómo aprendiste a hablar inglés?</h5>
                </div>
            </Container>

        </>
    )
}

export default EducationContainer;