import React from "react";
import Logo from "../../components/Logo";
import Link from "../../components/Link";
import Nav from "../../components/Nav";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo-link">
        <Logo />
        <div className="contucts">
          <span>nik.mironov.programmer@gmail.com</span>
          <a href="https://t.me/Nikolay_Mironov">@Nikolay_Mironov</a>
        </div>
        <Link />
      </div>
      <hr />
      <div className="footer__nav">
        <Nav />
      </div>
    </div>
  );
}

export default Footer;
