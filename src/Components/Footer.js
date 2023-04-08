import React from 'react';
import './styles/Footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
    const text = {
        text1: 'Lorem ipsum dolor',
        text2: 'sit amet consectetur'
    }
    return (
        <>
            <footer className='pt-4 pb-0'>
                <div className='d-flex justify-content-center'>
                    <div className='mx-4 d-flex row align-self-center'>
                        <div className='col'><a href='https://www.linkedin.com/in/sofi-alvarado/' target="_blank"><BsLinkedin size="2.2em"/></a></div>
                        <div className='col'><a href='https://github.com/sofi-alvarado' target="_blank"><BsGithub size="2.2em" /></a></div>
                    </div>
                    <div className='content mx-4 m-4'>
                        <ul className='list-unstyled '>
                            <li><a href='https://survey.stackoverflow.co/2022/' target="_blank">StackOverflow 2022 Developer Survey</a></li>
                            <li><a href='https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&token=936ed0a33ccd40d0986ec155b9844e13&id=SaJrjRQDxkSRcVyRsKSFosuBv6kdsBlFurcvZm2W2qxURVNIS0JTQjlaNjJWN1pQTVNUM0pTUkdVVy4u&analysis=true' target="_blank" >Encuesta para profesionales en Tecnología El Salvador 2022-2023</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;