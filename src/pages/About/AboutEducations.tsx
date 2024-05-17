import React from "react";
import AboutJob from "./AboutJob";
import { useAppSelector } from "../../hook";

export default function AboutEducations() {
  const education = useAppSelector((store) => store.data.aboutMe.trainings);
  return (
    <div className="educations">
      <div className="educations__title">
        <h2>Обучение</h2>
      </div>
      <div className="educations__items">
        {education.map((ed) => (
          <AboutJob practic={ed} key={ed.id} />
        ))}
      </div>
    </div>
  );
}
