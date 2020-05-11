import React from 'react';
import './landingPage.css';

import Footer from '../Footer'

const LandingPage = () => {
  return (
    <>
      <div className='grid landingpage'>
        <div className='container one wrapper'>
          <div className='header container one'>
            <h1>Latest Articles</h1>
          </div>
          <div className='header one content'>
            <h2>Read them they're cool!</h2>
          </div>
        </div>
        <div className='img one' />
        <div className='img two' />
        <div className='img three' />
        <div className='img four' />
        <div className='header container two'>
          <h1>Expertise</h1>
        </div>
        <div className='header two content'>
          <h2>Our journalists are the best for real!</h2>
        </div>
        <div className='header container three'>
          <h1>Services</h1>
        </div>
        <div className='header three content'>
          <h2>Download mac cleaner now! Not virus we promise!</h2>
        </div>
        <div className='header container four'>
          <h1>About us</h1>
        </div>
        <div className='header four content'>
          <h2>We are cewl gang gang</h2>
        </div>
        <div className='footerContainer'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
