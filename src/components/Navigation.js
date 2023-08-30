import React from "react";
import './Navigation.css';

function Navigation({ handlePageChange }) {
  return (
      <nav className="navigation">
          <a href="#About" onClick={() => handlePageChange("About")}>
              About Me
          </a>
          <a href="#Contact" onClick={() => handlePageChange("Contact")}>
              Contact Me Here
          </a>
          <a href="#Projects" onClick={() => handlePageChange("Projects")}>
              Find a Few of My Projects Here
          </a>
          <a href="#Resume" onClick={() => handlePageChange("Resume")}>
              Find My Resume Here
          </a>
      </nav>
  );
}

export default Navigation;
