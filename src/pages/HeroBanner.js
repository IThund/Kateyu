import React from 'react';
import '../styles/HeroBanner.scss';
import Hero from "../images/hero.jpg";

function HeroBanner() {
  return (
    <div className='Hero container'>
        <div className='banner'>
            <div className='img-frame'> 
                <img src={Hero} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner