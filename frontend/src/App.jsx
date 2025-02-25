import React from 'react';
import { Helmet } from 'react-helmet';
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

      <Helmet>
        <title>Daimon AI - AI-Powered Retail Analytics</title>
        <meta name="description" content="Optimize your retail space with AI-powered foot traffic analysis, customer heatmaps, and actionable insights." />
        <meta name="keywords" content="Daimon AI, retail analytics, AI foot traffic, customer heatmaps, store optimization" />
        <meta name="author" content="Daimon AI" />

        {/* Open Graph Meta Tags (for social media) */}
        <meta property="og:title" content="Daimon AI - AI-Powered Retail Analytics" />
        <meta property="og:description" content="Boost sales with Daimon AI's analytics tools for foot traffic and customer insights." />
        <meta property="og:image" content="https://thedaimon.com/assets/images/daimon.jpeg" />
        <meta property="og:url" content="https://thedaimon.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daimon AI - AI-Powered Retail Analytics" />
        <meta name="twitter:description" content="Optimize store layouts with AI-driven retail insights." />
        <meta name="twitter:image" content="https://thedaimon.com/assets/images/daimon.jpeg" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section id="home" aria-label="Hero Section">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about" className="section" aria-label="About Daimon AI">
        <AboutUs />
      </section>

      <section id="retail" className="section" aria-label="Retail Store Solutions">
        <RetailStore />
      </section>

      {/* How We Work Section */}
      <section id="services" className="section" aria-label="How Daimon AI Works">
        <WorkFlow />
      </section>

      {/* Services Section */}
      <section id="solutions" className="section" aria-label="Daimon AI Services">
        <Services />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section" aria-label="Contact Daimon AI">
        <ContactUs />
      </section>

      {/* Calendly Section */}
      <section id="calendly" className="section" aria-label="Schedule a Meeting">
        <Calendly />
      </section>
      {/* <Footer/> */}
    </div>
  );
}

export default App;



