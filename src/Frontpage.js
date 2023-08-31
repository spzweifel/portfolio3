import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function Frontpage() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const contentComponents = {
    About: <About />,
    Contact: <Contact />,
    Resume: <Resume />,
    Projects: <Projects />
  };

  return (
    <div className="container">
      <div className="left-side">
        <Navigation
          currentPage={currentPage} 
          handlePageChange={handlePageChange} 
        />
      </div>
      <div className="right-side">
        {contentComponents[currentPage]}
      </div>
      <Footer />
    </div>
  );
}

export default Frontpage;


