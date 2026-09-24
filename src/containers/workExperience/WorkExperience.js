import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    const renderCard = (card, i) => (
      <ExperienceCard
        key={i}
        isDark={isDark}
        cardInfo={{
          company: card.company,
          desc: card.desc,
          date: card.date,
          companylogo: card.companylogo,
          role: card.role,
          descBullets: card.descBullets,
          featured: card.featured
        }}
      />
    );
    const featured = workExperiences.experience.filter(card => card.featured);
    const others = workExperiences.experience.filter(card => !card.featured);
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              {featured.length > 0 && (
                <div className="experience-featured-div">
                  {featured.map(renderCard)}
                </div>
              )}
              <div className="experience-cards-div">
                {others.map(renderCard)}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
