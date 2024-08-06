import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <nav className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
            musico
        </a>
        <div className="header-links">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#booking">Booking</a>
            <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;