import React from "react";
import "./Navigation.css";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navigation">
      {currentPage !== "About" && (
        <a href="#About" onClick={() => handlePageChange("About")}>
          Home
        </a>
      )}
      <a href="#Contact" onClick={() => handlePageChange("Contact")}>
        Contact Me
      </a>
      <a href="#Projects" onClick={() => handlePageChange("Projects")}>
        My Projects
      </a>
      <a href="#Resume" onClick={() => handlePageChange("Resume")}>
        My Resume
      </a>
    </nav>
  );
}

export default Navigation;
