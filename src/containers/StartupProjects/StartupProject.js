import React from "react";
import "./StartupProjects.css";
import { projects } from "../../portfolio";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{projects.title}</h1>
        <p className="subTitle project-subtitle">{projects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text center">
            {projects.projects.map(project => {
              return (
                <div
                  className="saaya-health-div startup-projects-container"
                  onClick={() => openProjectInNewWindow(project.link)}
                >
                  <img
                    alt="working"
                    src={project.image}
                    height="120"
                    width="120"
                  ></img>

                  <div className="startup-project-text">{project.title}</div>
                </div>
              );
            })}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
  );
}
