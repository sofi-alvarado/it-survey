import React, { useState } from 'react';
import NavBar from './NavBar';
import BannerBackground from '../assets/home-banner-background.png';
import BannerImage from '../assets/home-banner-image.png';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <NavBar />
                <div className='home-banner-container'>
                    <div className='home-bannerImage-container'>
                        <img src={BannerBackground} alt="" />
                    </div>
                    <div className='home-text-section mx-5'>
                        <h1 className='primary-heading'>Encuesta de profesionales de Tecnologia, El Salvador 2022</h1>
                        <p className='primary-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </p>
                        <button className="secondary-button">
                            Order Now {" "}
                        </button>
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