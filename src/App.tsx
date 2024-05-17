import React from "react";
import "./App.css";
import "./assets/styles";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
