import React from 'react';
import './landingPage.css';

import Footer from '../Footer'

const LandingPage = () => {
  return (
    <>
      <div className='grid landingpage'>
        <div className='container one wrapper'>
          <div className='header container one' data-aos='fade-right'>
            <h1>Latest Articles</h1>
          </div>
          <div className='header one content'>
            <h2 data-aos='fade-right' data-aos-delay='1000'>Read them they're cool!</h2>
          </div>
        </div>
        <div className='img one' data-aos='fade-right' data-aos-once='true' />
        <div className='img two' data-aos='fade-up' data-aos-once='true' data-aos-anchor-placement='top' />
        <div className='img three' data-aos='fade-left' data-aos-once='true' />
        <div className='img four' data-aos='fade-right' data-aos-once='true' />
        <div className='header container two' data-aos='fade-right'>
          <h1>Expertise</h1>
        </div>
        <div className='header two content'>
          <h2 data-aos='fade-right' data-aos-delay='1000'>Our journalists are the best for real!</h2>
        </div>
        <div className='header container three' data-aos='fade-right'>
          <h1>Services</h1>
        </div>
        <div className='header three content'>
          <h2 data-aos='fade-right' data-aos-delay='1000'>Download mac cleaner now! Not virus we promise!</h2>
        </div>
        <div className='header container four' data-aos='fade-right'>
          <h1>About us</h1>
        </div>
        <div className='header four content'>
          <h2 data-aos='fade-right' data-aos-delay='1000'>We are cewl gang gang</h2>
        </div>
        <div className='footerContainer'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
