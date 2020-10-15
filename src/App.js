import React from 'react';
import Header from "./components/header";
import About from "./components/about-me";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Example from "./components/deleteme";
import { Route } from "react-router-dom";
import './SASS/App.scss';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
