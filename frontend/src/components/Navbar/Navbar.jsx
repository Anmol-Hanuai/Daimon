import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </button>
      <nav className={isOpen ? "navbar-links active" : "navbar-links"}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#retail">Retail</a></li>
          <li><a href="#services">Process</a></li>
          <li><a href="#solutions">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;



