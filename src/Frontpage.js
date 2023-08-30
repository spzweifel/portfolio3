import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer"; // Import the Footer component

function Frontpage() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div className="container">
          <About />
          <Navigation handlePageChange={handlePageChange} />
          <div className="content">
              {currentPage === "Contact" && <Contact />}
              {currentPage === "Resume" && <Resume />}
              {currentPage === "Projects" && <Projects />}
          </div>
          <Footer /> {/* Add the Footer component */}
      </div>
  );
}

export default Frontpage;

