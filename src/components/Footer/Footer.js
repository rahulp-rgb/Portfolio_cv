import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/payal-chauhan-39a702341/"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Payal Chauhan | &copy; {new Date().getFullYear()} All rights reserved.  
      </a>
    </footer>
  );
};

export default Footer;
