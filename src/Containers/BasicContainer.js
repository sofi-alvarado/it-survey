import React from 'react';
import CardItem from '../Components/CardItem';

import Container from 'react-bootstrap/Container';

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
                <div className='row d-flex justify-content-center align-items-center'>
                    <h2 className='primary-text'>Información Básica</h2>
                </div>
            </Container>

        </>

    )
}

export default BasicContainer;