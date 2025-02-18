import React from 'react';
import './AboutUs.css';
import illustration from '../../assets/images/anim_1.png'; 

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p className="about-quote">
          At Daimon Technologies, we are committed to exploring the ethical and philosophical dimensions of artificial intelligence. We believe that understanding the human-AI relationship is crucial for developing innovative, responsible, and impactful AI solutions.
While our foundation is built on thoughtful exploration of AI's broader implications, our expertise spans providing AI-driven services that unlock business potential. From high-quality data annotation and advanced computer vision technologies to predictive analytics and anomaly detection, we empower businesses to make smarter, data-driven decisions.
          </p>
          <br/>
         {/* <h3>What We Offer:</h3> */}
         {/* <br/> */}
          <ul>
            <li> <b>Unlock Actionable Insights:</b> Our AI-powered predictive analysis and machine learning anomaly detection help identify trends, improve decision-making, and optimize operations.</li>
            <li> <b>Streamline Data Management:</b> With precise data annotation and labeling services, we ensure that your data is clean, accurate, and ready for advanced AI applications.</li>
            <li> <b>Enhance Operational Efficiency:</b> Our AI-based computer vision solutions automate processes, reduce errors, and increase operational efficiency, allowing you to focus on growth and innovation.</li>
            {/* <li> <b>Predictive Analysis:</b> Data-driven forecasting to optimize decision-making and risk management.</li> */}
          </ul>
          {/* <br/> */}
          {/* <p>At <b>HanuAI</b>, we help businesses harness the power of AI to unlock new opportunities and improve operational efficiency.</p> */}
        </div>
        <div className="about-image">
          <img className="image" src={illustration} alt="AI and technology illustration" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
