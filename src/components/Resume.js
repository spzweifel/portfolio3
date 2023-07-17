import ResumePDF from "../utils/Resume.pdf";
import React from "react";

const Resume = () => {
  return (
    <div className="resume1">
      <div className="container">
        <span className="title">
          <h3>
            Find my{" "}
            <a className="resume2" href={ResumePDF}>
              resume
            </a>{" "}
            here
          </h3>
        </span>
        <p className="proficiencies">
          I am proficient in:
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
        </p>
      </div>
    </div>
  );
};

export default Resume;
