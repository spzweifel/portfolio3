import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <section className="project">
        <div className="project-title">
          <button className="project-button" onClick={() => window.open("https://github.com/ckc2007/DailyCalm")}>
            Daily Calm, myself as a contributor
          </button>
        </div>
        <div className="project-screenshot">
          <img
            src={require("../resources/images/DailyCalm.png")}
            alt="Daily Calm"
          />
        </div>
      </section>
      <section className="project">
        <div className="project-title">
          <button className="project-button" onClick={() => window.open("https://github.com/spzweifel/Password_Generator")}>
            Password Generator
          </button>
        </div>
        <div className="project-screenshot">
          <img
            src={require("../resources/images/password.png")}
            alt="Password Generator"
          />
        </div>
      </section>
      <section className="project">
        <div className="project-title">
          <button className="project-button" onClick={() => window.open("https://github.com/spzweifel/Weather-Dashboard")}>
            Weather Dashboard
          </button>
        </div>
        <div className="project-screenshot">
          <img
            src={require("../resources/images/weatherDash.png")}
            alt="Weather Dashboard"
          />
        </div>
      </section>
      <section className="project">
        <div className="project-title">
          <button className="project-button" onClick={() => window.open("https://github.com/spzweifel/Work-day")}>
            Work Day
          </button>
          <img
            src={require("../resources/images/workDay.png")}
            alt="Work Day"
          />
        </div>
      </section>
      <section className="project">
        <div className="project-title">
          <button className="project-button" onClick={() => window.open("https://github.com/spzweifel/Code_Quiz")}>
            Coding Quiz
          </button>
          <img
            src={require("../resources/images/codeQuiz.png")}
            alt="Coding Quiz"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
