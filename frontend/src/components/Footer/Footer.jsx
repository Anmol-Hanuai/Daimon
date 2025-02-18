import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <h1 className="footer-logo">HanuAI</h1>
        <p className="footer-tagline">
          Elevating Data-Centric AI through Programmatic Labeling, Reinforcement Learning, and Precision-Tuned Models for unparalleled advancement.
        </p>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h2>Products & Services</h2>
          <ul>
            <li>Software Development</li>
            <li>App & Web Development</li>
            <li>Security Surveillance</li>
            <li>AI Dashboard Creation</li>
            <li>AI Labeling Integration</li>
            <li>Integrated Website Tools</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li>Blogs</li>
            <li>Case Studies</li>
            <li>Learn</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>About Us</h2>
          <ul>
            <li>Company</li>
            <li>Careers</li>
            <li>Terms</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Location</h2>
          <p>CPM 50, 2nd Floor, Central Plaza, Emaar Mohali Hills, Sector 105, Mohali 140308</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 HanuAI. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

