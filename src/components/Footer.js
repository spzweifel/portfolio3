import React from 'react';
import { ReactComponent as GITHUB } from '../resources/icons/github.svg';
import { ReactComponent as LINKEDIN } from '../resources/icons/linkedin.svg';
import 'bulma/css/bulma.min.css';
import './Footer.css'; // Import your custom CSS file for the Footer

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://github.com/spzweifel" target="_blank" rel="noopener noreferrer">
          <GITHUB />
        </a>
        <a href="https://www.linkedin.com/in/sean-zweifel-161768144/" target="_blank" rel="noopener noreferrer">
          <LINKEDIN />
        </a>
      </div>
    </div>
  );
};

export default Footer;
