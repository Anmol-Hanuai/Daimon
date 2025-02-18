import React from 'react';
import Services from './components/Services/Services';
import ContactUs from './components/Contact Us/ContactUs';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/About Us/AboutUs';
import Hero from './components/Hero/Hero';
import Calendly from './components/Calendly/Calendly';
import WorkFlow from './components/WorkFlow/WorkFlow';
import Footer from './components/Footer/Footer';
import RetailStore from './components/Retail Store/RetailStore';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <AboutUs />
      </section>

      <section id="retail" className="section">
        <RetailStore />
      </section>

      {/* How We Work Section */}
      <section id="services" className="section">
        <WorkFlow />
      </section>

      {/* Services Section */}
      <section id="solutions" className="section">
        <Services />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section">
        <ContactUs />
      </section>

      {/* Calendly Section */}
      <section id="calendly" className="section">
        <Calendly />
      </section>
      {/* <Footer/> */}
    </div>
  );
}

export default App;



