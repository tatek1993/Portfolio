import React from 'react';
import Header from "./components/header";
import About from "./components/about-me";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
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
