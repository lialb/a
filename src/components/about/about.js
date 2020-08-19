import React, { Component } from 'react';
import './about.css';
import Portrait from '../../Assets/albertli.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class About extends Component {
  render() {
    AOS.init();
    return(
      <div className="about-main">
        <div className="about-text">
          <h1 data-aos="fade-up" data-aos-delay="200" className="display-5">
            About
          </h1>
          <img data-aos="fade-up" data-aos-delay="200" src={Portrait} width="30%" alt="Albert Li"></img>
          <h2 data-aos="fade-left">
            I am: 
          </h2>
          <p data-aos="fade-left" data-aos-delay="200">
            <strong>Albert</strong> Yiliang <strong>Li</strong>
          </p>
          <p data-aos="fade-left" data-aos-delay="200">
            Studying <strong>Computer Science</strong> at The University of Illinois at Urbana-Champaign
          </p>
          <p data-aos="fade-left" data-aos-delay="200" >
            Pursuing two minors in <strong>Statistics</strong> and <strong>Mathematics</strong>
          </p>
          <p data-aos="fade-left" data-aos-delay="200">
            Trying my best &#x3c;3
          </p>
        </div>
        <hr width="70%"/>
        <div data-aos="fade-right" data-aos-delay="200" class="centered">
          <p class="text">
            As of August 2020, I am a Software Engineer Intern at <strong>Motorola Solutions</strong>. 
            I worked as part of the CirrusCentral Mobile team this past summer.
            I developed the backend for a mobile application monitoring radio systems data with real time notifications streams from Kafka.
            <br></br>
            <br></br>
            I previously worked as a Software Engineering Co-Op at <strong>Caterpillar</strong>, part of the Product Visual Analytics team (PVA)
            I helped out engineers by creating a visualization and analytics web platform called the "1-Click Tool", improving speed and efficiency of data lookup and extraction for 500+ users (still growing!).
            <br></br>
            <br></br>
            I worked at <strong>Ameren</strong> in summer 2019, as part of the Innovation App Development team. I dabbled extensively
            on full-stack web development, creating a rennovated management portal for company PMs, analysts, and executives.
          </p>
        </div>
        <hr width="70%"/>
        <div data-aos="fade-left" data-aos-delay="200" class="centered">
          <p class="text">
            As a student at UIUC, I enjoy all things tech, data science, and ML.
            <br></br>
            When I'm not working or doing homework, I enjoy teaching, working out, learning new stuff, and cats.
            <br></br>
            <br></br>
            I'm particularly proud of my <a href="https://lialbert.com/uiuc-diversity/" target="_blank" rel="noopener noreferrer"><strong>UIUC Diversity</strong> </a> 
            project, where I interactively display 15 years of racial demographics of every major and college at the University of Illinois.
          </p>
        </div>
      </div>
    );
  }
}