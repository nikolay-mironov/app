import React from "react";
import Project from "./Project";
import { useAppSelector } from "../../hook";

const Projects = () => {
  const works = useAppSelector((store) => store.data.aboutMe.works);
  return (
    <div className="projects">
      <div className="projects__title">
        <h1>Некоторые из моих проектов</h1>
      </div>
      <div className="projects__items">
        {works.map((work) => (
          <Project work={work} key={work.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
