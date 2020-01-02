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
          <div className="startup-project-text">
            {projects.projects.map(project => {
              return (
                <div
                  className="saaya-health-div"
                  onClick={() => openProjectInNewWindow(project.link)}
                >
                  <img alt="Saad Working" src={project.image}></img>
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
