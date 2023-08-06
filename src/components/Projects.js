import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="project6">
        <a href="https://daily-calm-2023-be74e09f75dd.herokuapp.com/">
          Daily Calm
        </a>
        <img src={require("../resources/images/DailyCalm.png")}
        alt="Daily Calm"></img>
      </section>
      <section className="project1">
        <a
          href="https://murmuring-everglades-34555.herokuapp.com/"
          className="techBlog"
        >
          Tech Blog
        </a>
        <img
          src={require("../resources/images/Techblog4.png")}
          alt="Tech Blog"
        />
      </section>
      <section className="project2">
        <a href="https://spzweifel.github.io/Weather-Dashboard/">
          Weather Dashboard
        </a>
        <img
          src={require("../resources/images/weatherDash.png")}
          alt="Weather Dashboard"
        ></img>
      </section>
      <section className="project3">
        <a href="https://github.com/spzweifel/Work-day">Work Day</a>
        <img
          src={require("../resources/images/workDay.png")}
          alt="Work Day"
        ></img>
      </section>
      <section className="project4">
        <a href="https://github.com/spzweifel/Code_Quiz">Code Quiz</a>
        <img
          src={require("../resources/images/codeQuiz.png")}
          alt="Code Quiz"
        ></img>
      </section>
      <section className="project5">
        <a href="https://github.com/spzweifel/employee_tracker">Employee Tracker</a>
        <img
          src={require("../resources/images/codeQuiz.png")}
          alt="Employee Tracker"
        ></img>
      </section>
      <section className="project6">
        <a href="https://github.com/spzweifel/employee_tracker">Employee Tracker</a>
      </section>
    </div>
  );
};

export default Projects;
