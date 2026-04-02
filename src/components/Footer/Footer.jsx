import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>Hackathon</h3>
          <p>Building great ideas together</p>
        </div>

        <div className="footer__links">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="https://github.com/your-org" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Hackathon. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;