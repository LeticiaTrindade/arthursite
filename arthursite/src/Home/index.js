import React from 'react';
import './style.css';
import Profile from '../Images/profile.png';

function Home() {
  return (
    <div className='container home d-flex'>

      <div className='left d-flex flex-column justify-content-around col-md-6'>
        <h1 className='text-uppercase'>Texto motivacional</h1>
        <h3>Outro texto motivacional que complementa o de cima</h3>
        <button className='home-button'>Fale comigo</button>
      </div>

      <div className='right col-md-6'>
        <img className='profile' src={Profile} />
      </div>

    </div>
  );
}

export default Home;
