import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import TopNavbar from './components/navigation/TopNavBar';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/exp';
import Misc from './components/misc/misc';
import Footer from './components/footer/footer';
import Particles from './components/particles/particles';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <TopNavbar className="navbar d-none d-sm-block"/>
      <Particles/>
      <Element name="home">
        <Home className="App" title="home"/>
      </Element>
      <Element name="about">
        <About title="about"/>
      </Element>
      <Element name="skills">
        <Skills title="skills"/>
      </Element>
      <Element name="experience">
        <Experience title="experience"/>
      </Element>
      <Element name="misc">
        <Misc title="misc"/>
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
