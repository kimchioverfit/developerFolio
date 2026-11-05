import React from "react";
import {selectedWork} from "../../portfolio";
import "./SelectedWork.scss";

export default function SelectedWork() {
  if (!selectedWork.display) return null;

  return (
    <section
      className="main selected-work"
      id="selected-work"
      aria-labelledby="selected-work-title"
    >
      <h1 className="skills-heading" id="selected-work-title">
        {selectedWork.title}
      </h1>
      <p className="selected-work-intro">{selectedWork.subtitle}</p>
      <div className="selected-work-grid">
        {selectedWork.projects.map(project => (
          <article
            className="selected-work-card"
            key={project.id}
            aria-labelledby={`${project.id}-title`}
          >
            <p className="selected-work-category">{project.category}</p>
            <h2 id={`${project.id}-title`}>{project.title}</h2>
            <p className="selected-work-outcome">{project.outcome}</p>
            <p>{project.summary}</p>
            <ul className="selected-work-details">
              {project.details.map(detail => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="selected-work-footer">
              <p className="selected-work-evidence">{project.evidence}</p>
              <ul
                className="selected-work-technologies"
                aria-label="Technologies and methods"
              >
                {project.technologies.map(technology => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
