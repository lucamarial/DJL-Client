import React from 'react';
import './landingPage.css';

const LandingPage = () => {
  return (
    <>
      <div className='grid landingpage'>
        <div className='header container one'>
          <h1>Latest Articles</h1>
          <h2>Read them they're cool!</h2>
        </div>
        <div className='img one'></div>
        <div className='img two'></div>
        <div className='header container two'>
          <h1>Expertise</h1>
          <h2>Our journalists are the best for real!</h2>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
