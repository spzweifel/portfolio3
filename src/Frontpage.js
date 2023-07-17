import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

function Frontpage() {
    const [currentPage, setCurrentPage] = useState("About");

  const render = () => {
    if (currentPage === "About") {
        return <About></About>
    } else if (currentPage === "Contact") {
        return <Contact></Contact>
    } else if (currentPage === "Resume") {
        return <Resume></Resume>
    } else if (currentPage === "Projects") {
        return <Projects></Projects>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header></Header>
      <Navigation handlePageChange={handlePageChange}></Navigation>
      {render()}
    </div>
  );
}

export default Frontpage;
