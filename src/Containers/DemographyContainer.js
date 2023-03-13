import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from "../resultados_totales.json";
import { RiQuestionnaireFill } from "react-icons/ri";

const DemographyContainer = () => {
    const firstColor='#0b8f20';
    const secondColor='#1ab032';
    return (
        <>
            <CardItem
                id='demography'
                className='demography-card'
                title='Demografía'
            />
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                    <h1>Demografía</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                            <BarChart 
                            chartInfo={myData.edad} 
                            autoSkipp={false} 
                            firstColor={firstColor}
                            secondColor={secondColor}
                            />
                          </div>
                          <span><RiQuestionnaireFill /> ¿Cuál es tu edad?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                        <DonutChart 
                          chartInfo={myData.genero} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Cuál de los siguientes te describe mejor?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <div className="col chart-container d-flex justify-content-center">
                        <BarChart 
                          chartInfo={myData.callcenter} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                          </div>
                        <span><RiQuestionnaireFill /> ¿Alguna vez has trabajado en call-center?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.atributos} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <span><RiQuestionnaireFill /> ¿Consideras tener alguno de los siguientes atributos personales?</span>
                </div>
            </Container>
            <Container>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                        <BarChart 
                          chartInfo={myData.departamento} 
                          autoSkipp={false} 
                          firstColor={firstColor}
                          secondColor={secondColor}
                          />
                        <span><RiQuestionnaireFill /> ¿En cuál departamento de El Salvador vives?</span>
                </div>
            </Container>
        </>

    )
}

export default DemographyContainer;