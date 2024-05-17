import React from "react";
import TechIcons from "./TechIcons";

const TechStack = () => {
  return (
    <div className="tech">
      <div className="tech__title">
        <h1>Стек технологий</h1>
        <h3>Технологии с которыми я работаю</h3>
      </div>
      <TechIcons />
    </div>
  );
};

export default TechStack;
