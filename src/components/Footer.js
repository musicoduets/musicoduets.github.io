import React from "react";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a
          href="https://github.com/P-Newspaper/p-Newspaper"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <img src={github} alt="Github" />
        </a>
        <a
          href="https://www.instagram.com/pai.claremont/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
