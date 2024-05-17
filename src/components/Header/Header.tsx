import React from "react";

import Logo from "../Logo";
import Nav from "../Nav";
import Link from "../Link";
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <Link />
    </header>
  );
};

export default Header;
