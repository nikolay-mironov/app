import React from "react";
import Hello from "../../assets/icon/hello.svg";
import MeTitle from "../../assets/img/meTitle.jpg";

function HomeMain() {
  return (
    <div className="main">
      <div className="main__title">
        <span>
          Привет <img src={Hello} alt="img" />,
        </span>

        <span>Меня зовут </span>
        <span className="main__title-surname">Николай Миронов</span>
        <span>Frontend Engineer</span>
      </div>
      <div className="main__photo">
        <img src={MeTitle} alt="img" />
      </div>
    </div>
  );
}

export default HomeMain;
