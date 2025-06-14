import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      {skillsSection.softwareSkills.map((skill, i) => (
        <div className="software-skill-inline" key={i}>
          {skill.fontAwesomeClassname ? (
            <i className={`${skill.fontAwesomeClassname} software-skills-icon`}></i>
          ) : (
            skill.customIcon && (
              <img
                src={require(`../../assets/images/${skill.customIcon}`)}
                alt={skill.skillName}
                className="software-skills-custom-icon"
              />
            )
          )}
          <p>{skill.skillName}</p>
        </div>
      ))}
    </div>
  );
}
