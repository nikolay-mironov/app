import React from "react";
import AboutBiography from "./AboutBiography";
import AboutJobs from "./AboutJobs";
import AboutEducations from "./AboutEducations";

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <h2>Обо мне</h2>
      </div>
      <div className="about__biography">
        <AboutBiography />
      </div>
      <div className="about__experience animate__animated animate__zoomInDown">
        <AboutJobs />
      </div>
      <div className="about__education">
        <AboutEducations />
      </div>
    </div>
  );
};

export default About;
