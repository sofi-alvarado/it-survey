import React from 'react';
import CardItem from '../Components/CardItem';
import Container from 'react-bootstrap/Container';
import BarChart from '../Components/BarChart';

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
                <div className='row d-flex justify-content-center align-items-center primary-text'>
                    <h1>Información Básica</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.</p>
                          <BarChart />
                        
                        <h1>¿Cuál de los siguientes describe tu situación de empleo?</h1>
                </div>
            </Container>

        </>
    )
}

export default BasicContainer;