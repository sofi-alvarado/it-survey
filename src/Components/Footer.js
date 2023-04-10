import React from 'react';
import './styles/Footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
    const text = {
        link1: 'https://www.linkedin.com/in/sofi-alvarado/',
        link2: 'https://github.com/sofi-alvarado',
        link3: 'https://survey.stackoverflow.co/2022/',
        link4: 'https://github.com/jorgesoft/encuesta-it-el-salvador-2023'
    }
    return (
        <>
            <footer className='pt-4 pb-0'>
                <div className='d-flex justify-content-center'>
                    <div className='mx-4 d-flex row align-self-center'>
                        <div className='col mb-3 mx-1'><a href={text.link1} target='_blank' rel='noreferrer'><BsLinkedin size="2.2em"/></a></div>
                        <div className='col mx-1'><a href={text.link2} target='_blank' rel='noreferrer'><BsGithub size="2.2em" /></a></div>
                    </div>
                    <div className='content mx-4 m-4'>
                        <ul className='list-unstyled '>
                            <li><a href={text.link3} target='_blank' rel='noreferrer'>StackOverflow 2022 Developer Survey</a></li>
                            <li><a href={text.link4} target='_blank' rel='noreferrer'>Resultados de la encuesta</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;