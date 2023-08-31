import ResumePDF from "../utils/Resume.pdf";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h3 className="resume-title">
        Find my resume here
      </h3>
      <a className="resume-button" href={ResumePDF} target="_blank" rel="noopener noreferrer">
        View My Resume
      </a>
      <div className="proficiencies">
        <p className="technologies1">I Am Proficient In These Technologies And More</p>
        <ol className="technologies">
            <li>HTML & CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Handlebars</li>
            <li>Sequelize</li>
            <li>Insomnia</li>
            <li>Heroku</li>
            <li>Frontend Development</li>
            <li>Server Side API & Third Party API</li>
            <li>Backend Development</li>
            <li>Full Stack Development</li>
            </ol>
      </div>
    </div>
  );
};

export default Resume;


    //  <h3 className="resume-title">
    //     <small>Find my{" "}
    //         <a className="resume2" href={ResumePDF}>
    //           resume
    //         </a>{" "}
    //         here</small>
    //   </h3>