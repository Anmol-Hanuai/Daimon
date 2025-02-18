import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <nav className="navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#retail">Retail</a></li>

          <li><a href="#services">Process</a></li>
          <li><a href="#solutions">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
          {/* <li><a href="#blogs">Blogs</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;



