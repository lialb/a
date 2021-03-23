import React from 'react';
import './App.css';
import Home from './components/home/home';
import TopNavbar from './components/navigation/TopNavBar';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Misc from './components/misc/misc';
import Footer from './components/footer/footer';
// import Particles from './components/particles/particles';
import { Element } from 'react-scroll';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faFileAlt, faHome);

function App() {
  return (
    <div className="App">
      <TopNavbar className="navbar d-none d-sm-block"/>
      {/* <Particles/> */}
      <Element name="home">
        <Home className="App" title="home"/>
      </Element>
      <Element name="about">
        <About title="about"/>
      </Element>
      <Element name="skills">
        <Skills title="skills"/>
      </Element>
      <Element name="misc">
        <Misc title="misc"/>
      </Element>
      <Element name="contact">
        <Footer title="contact"/>
      </Element>
    </div>
  );
}

export default App;
