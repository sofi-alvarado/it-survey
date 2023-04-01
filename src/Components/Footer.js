import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Footer.css';

const Footer = () => {
    const text = {
        text1: 'Lorem ipsum dolor',
        text2: 'sit amet consectetur'
    }
    return (
        <Container> 
            <div className='d-flex justify-content-center'>
                <div className='mx-4'>
                    <h6>{text.text2}</h6>
                </div>
                <div className='mx-4'>
                    <h6>{text.text1}</h6>
                    <ul className='list-unstyled'>
                        <li>{` ${text.text1} 1`}</li>
                        <li>{` ${text.text1} 2`}</li>
                        <li>{` ${text.text1} 3`}</li>
                    </ul>
                </div>
                <div className='mx-4'>
                    <h6>{text.text1}</h6>
                    <ul className='list-unstyled'>
                        <li>{` ${text.text1} 1`}</li>
                        <li>{` ${text.text1} 2`}</li>
                        <li>{` ${text.text1} 3`}</li>
                    </ul>
                </div>
                <div className='mx-4'>
                    <h6>Enlaces de interes</h6>
                    <ul className='list-unstyled'>
                        <li> StackOverflow 2022 Developer Survey</li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}

export default Footer;