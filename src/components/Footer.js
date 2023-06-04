import React from 'react';
import '../styles/Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper container">
        <div className="cta">
          <h2>
            <span className="line">
              <span className="line-inner">
                Let's work 
              </span>
            </span>
            <span className="line">
              <span className="line-inner">
                 together
              </span>
            </span>
          </h2>
          <div>
            <a href="mailto:yukachingkate@yahoo.com" className="button no-cursor">Email Me</a>
          </div>
          
        </div>
        <div className="bottom">
            <p><small>Copyright © {new Date().getFullYear()} Kate Yu</small> </p>
          </div>
      </div>
    </div>
  )
}

export default Footer