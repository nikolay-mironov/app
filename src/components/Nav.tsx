import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "../assets/icon/menu.svg";
import { useState } from "react";

function Nav() {
  const [isVisibleItems, setIsVisibleItems] = useState(false);
  const isVisibleHandler = () => {
    setIsVisibleItems(!isVisibleItems);
  };
  return (
    <>
      <nav className="nav__desktop">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/techstack">Tech Stack</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <div className="nav__mobile">
        <img src={Menu} alt="icon" onClick={() => isVisibleHandler()} />
        {isVisibleItems && (
          <div
            className="menu__items"
            onClick={() => {
              setIsVisibleItems(false);
            }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/techstack">Tech Stack</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
