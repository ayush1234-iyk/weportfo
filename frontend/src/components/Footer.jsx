// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Separate CSS for footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Ayush Amrit. All rights reserved.</p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/ayush-amrit-12246b2b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ayush1234-iyk"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/your-instagram/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
