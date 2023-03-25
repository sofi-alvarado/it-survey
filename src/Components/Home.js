import React, { useState } from 'react';
import NavBar from './NavBar';
import BannerBackground from '../assets/home-banner-background.png';
import BannerImage from '../assets/home-banner-image.png';
import { Link } from "react-scroll";

const Home = () => {
    const text = {
        title: 'Encuesta para profesionales en Tecnologia | El Salvador 2022-2023',
        github: 'Echale un vistazo al repositorio de este proyecto en ',
        button: 'Ver los resultados'
    }
    return (
        <>
            <div className='home-container'>
                <NavBar />
                <div className='home-banner-container'>
                    <div className='home-bannerImage-container'>
                        <img src={BannerBackground} alt="" />
                    </div>
                    <div className='home-text-section d-flex justify-content-center mx-5'>
                        <h1 className='primary-heading'>{text.title}</h1>
                        <p className='primary-text'>
                            {text.github} <a  href='https://github.com/sofi-alvarado/it-survey'>GitHub</a>
                        </p>
                        <Link className="secondary-button" to="basic-info">
                            {text.button} {" "}
                        </Link>
                    </div>
                    <div className='home-image-section'>
                        <img src={BannerImage} alt="" ></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;