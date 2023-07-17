import React from "react";

function Navigation({ handlePageChange}) {
    return(
        <nav>
            <h3 className="aboutme">
                <a href="#About" onClick={() => handlePageChange("About")}>
                    About Me
                </a>
            </h3>
            <h3 className="contactme">
                <a href="#Contact" onClick={() => handlePageChange("Contact")}>
                    Contact Me Here
                </a>
            </h3>
            <h3 className="Projects"> 
                <a href="#Projects" onClick={() => handlePageChange("Projects")}>
                Find a Few of My Projects Here
                </a>
            </h3>
            <h3 className="Resume"> 
                <a href="#Resume" onClick={() => handlePageChange("Resume")}>
                Find My Resume Here
                </a>
            </h3>
        </nav>
    )

    }
//make sure to include your resume in this project
export default Navigation;