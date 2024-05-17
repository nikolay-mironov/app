import React from "react";
import Telegram from "../assets/icon/telegram.svg";
import Git from "../assets/icon/github.svg";

function Link() {
  return (
    <div className="messengers">
      <a href="https://t.me/Nikolay_Mironov">
        <img className="messegers-icon-telg" src={Telegram} alt="img" />
      </a>
      <a href="https://github.com/">
        <img src={Git} className="messegers-icon-git" alt="img" />
      </a>
    </div>
  );
}

export default Link;
