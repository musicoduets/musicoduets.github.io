import React, { useEffect, useState } from "react";
import "../styles/header.css";

function Header() {
  const [headerColor, setHeaderColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentColor = headerColor;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
          currentColor = section.getAttribute("data-color");
        }
      });

      setHeaderColor(currentColor);

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerColor]);

  return (
    <nav className="header" style = {{ backgroundColor: headerColor }}>
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