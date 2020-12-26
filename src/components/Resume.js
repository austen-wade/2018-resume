import React from "react";
import data from "../data.js";
import ResumeItem from "./ResumeItem";

const Resume = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Austen Wade</h1>
        <div className="contact-info">
          <a className="link email" href="mailto:austen.wade.ut@gmail.com">
            austen.wade.ut@gmail.com
          </a>
          <br />
          <a
            className="link linkedin -hide-print"
            target="_blank"
            href="https://www.linkedin.com/in/austen-w-3b723613b/"
          >
            LinkedIn
          </a>
          <br />
          <a
            className="link github -hide-print"
            target="_blank"
            href="https://www.github.com/austen-wade"
          >
            GitHub
          </a>
          <br />
          <a
            className="link codepen -hide-print"
            target="_blank"
            href="https://www.codepen.io/austen-wade"
          >
            CodePen
          </a>
        </div>
      </div>

      <ResumeItem type="languages" title="Languages">
        {data.languages.map((lang, idx) => (
          <span key={lang} className="item language">
            {lang}
            {idx !== data.languages.length - 1 ? ", " : ""}
          </span>
        ))}
      </ResumeItem>

      <ResumeItem type="libraries" title="Libraries &amp; Frameworks">
        {data.libraries.map((library, idx) => (
          <span key={library} className="item libraries">
            {library}
            {idx !== data.libraries.length - 1 ? ", " : ""}
          </span>
        ))}
      </ResumeItem>

      <ResumeItem type="tools" title="Tools &amp; Software">
        {data.tools.map((tool, idx) => (
          <span key={tool} className="item tool">
            {tool}
            {idx !== data.tools.length - 1 ? ", " : ""}
          </span>
        ))}
      </ResumeItem>

      <ResumeItem type="experience" title="Experience">
        {data.experience.map((job, idx) => (
          <div key={job.title} className="item experience">
            <div className="position">{job.title}</div>
            <div className="workplace">{job.workplace}</div>
            <div className="dates">{job.dates}</div>
            <ul className="task">
              {job.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </ResumeItem>
    </div>
  );
};

export default Resume;
