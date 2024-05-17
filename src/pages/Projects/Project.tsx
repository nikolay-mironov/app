import React from "react";
import GitHub from "../../assets/icon/github.svg";
import { IWork } from "../../models";

interface ProjectProps {
  work: IWork;
}

function Project({ work }: ProjectProps) {
  return (
    <div className="project">
      <div className="project__image">
        <img src={work.img} alt="img" />
      </div>
      <div className="project__info">
        <div className="project__info-title">
          <h3>{work.title}</h3>
        </div>
        <div className="project__info-text">
          <p>{work.desc}</p>
        </div>
        <div className="project__info-stack">
          <h4>Стек технологий:</h4>
          <span>{work.stack}</span>
        </div>
        {work.link && (
          <div className="project__info-link">
            <img src={GitHub} alt="icon" />
            <a href={work.link}>Посмотреть код</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
