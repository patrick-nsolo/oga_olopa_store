import React from 'react';
import Typed from 'react-typed';
import './Home.css';

const  Home = () => {
  return (
    <div className="home-container overlay">
      <div className='bg-img'>
        <img src="images/pixx-short.webp" alt=""/>
      </div>
      <div className='title'>
        <h1 className="intro">OGA OLOPA NG</h1>
        <h2 className="role">
          <Typed strings={['Your Online Security Shop']} typeSpeed={40} backSpeed={50} loop={false}/>
        </h2>
        <div className='btn-container'>
          <a href='#contact'>Shop</a>
        </div>
      </div>
    </div>
  )
}

export default Home;