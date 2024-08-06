import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <nav className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
            musico
        </Link>
        <div className="header-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;