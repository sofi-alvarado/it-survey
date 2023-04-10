import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../Components/styles/Cards.css';

const CardItem = ({id, className = '', title, cardDescription}) => {
    return (
            <Container id={id}>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-12'>
                        <Card className={`my-5 mx-auto h-100 ${className}`} style={{ borderRadius: '1rem', border: 'none' }}>
                            <Card.Body className='p-5 w-100 d-flex flex-column font-size'>
                                <Card.Title className='text-start'><h1>{title}</h1></Card.Title>
                                <Card.Text className='card-description text-justify mb-3'>{cardDescription}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
    );
}

export default CardItem;