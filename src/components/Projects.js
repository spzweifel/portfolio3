import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <section className="project">
        <div className="project-title">
          <a href="https://github.com/ckc2007/DailyCalm">
            Daily Calm, myself as a contributor
          </a>
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
          <a href="https://github.com/spzweifel/tech-blog">Tech Blog</a>
        </div>
        <div className="project-screenshot">
          <img
            src={require("../resources/images/Techblog4.png")}
            alt="Tech Blog"
          />
        </div>
      </section>
      <section className="project">
        <div className="project-title">
          <a href="https://spzweifel.github.io/Weather-Dashboard/">
            Weather Dashboard
          </a>
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
        <a href="https://spzweifel.github.io/Work-day/">Work Day</a>
        <img
          src={require("../resources/images/workDay.png")}
          alt="Work Day"
        />
        </div>
      </section>
      <section className="project">
        <div className="project-title">
        <a href="https://github.com/spzweifel/employee_tracker">
          Employee Tracker
        </a>
        <img
          src={require("../resources/images/codeQuiz.png")}
          alt="Employee Tracker"
        />
        </div>
      </section>
    </div>
  );
};

export default Projects;
