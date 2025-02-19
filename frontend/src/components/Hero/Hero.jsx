import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  return (
    <section className="custom-hero">
      <div className="custom-hero-overlay"></div>
      <div className="custom-hero-container">
        <div className="custom-hero-row">
          <div className="custom-hero-content">
            <div className="hero-container">
              <div className="hero-title">
                AI Solutions for 
                <span className="gradient-text">
                  <Typewriter
                    words={[' Smarter Business Decisions', ' Data-Driven Insights', ' Optimized Performance']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={90}
                    delaySpeed={1000}
                  />
                </span>
              </div>
            </div>
            <h5 className='desc'>
            Daimon delivers advanced AI-driven solutions in data annotation, document parsing, computer vision, and predictive analysis to help businesses streamline workflows, enhance accuracy, and make data-driven decisions with confidence.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


