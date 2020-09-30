import React from 'react';
import Header from "./components/header";
import About from "./components/about-me";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Route } from "react-router-dom";
import './SASS/App.scss';

function App() {
  return (
    <div>
      <Header />
      <Route path="/About" component={About} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Projects" component={Projects} />

    </div>

  );
}

export default App;
