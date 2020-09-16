import React from 'react';
import Header from "./components/header";
import About from "./components/about-me";
import Skills from "./components/skills";
import './SASS/App.scss';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
    </div>

  );
}

export default App;
