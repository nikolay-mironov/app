import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
