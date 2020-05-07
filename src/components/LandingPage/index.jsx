import React from 'react';
import './landingPage.css';

import Footer from '../Footer'

const LandingPage = () => {
  return (
    <>
      <div className='grid landingpage'>
        <div className='header container one'>
          <h1>Latest Articles</h1>
          <h2>Read them they're cool!</h2>
        </div>
        <div className='img one' />
        <div className='img two' />
        <div className='img three' />
        <div className='img four' />
        <div className='header container two'>
          <h1>Expertise</h1>
          <h2>Our journalists are the best for real!</h2>
        </div>
        <div className='header container three'>
          <h1>Services</h1>
        </div>
        <div className='footerContainer'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
