import React from "react";
import TechStack from "../TechStack/TechStack";
import Projects from "../Projects/Projects";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <>
      <HomeMain />
      <TechStack />
      <Projects />
    </>
  );
};

export default Home;
