import React from "react";
import Telegram from "../../assets/icon/telegram.svg";
import Email from "../../assets/icon/email.png";

const Contacts = () => {
  return (
    <div className="contacts">
      <h3>Вопросы можно задать по: </h3>
      <div className="contucts__mail">
        <img src={Email} alt="icon" />
        <span>nik.mironov.programmer@gmail.com</span>
      </div>
      <div className="contucts__telegram">
        <img src={Telegram} alt="icon" />
        <a href="https://t.me/Nikolay_Mironov">@Nikolay_Mironov</a>
      </div>
    </div>
  );
};

export default Contacts;
