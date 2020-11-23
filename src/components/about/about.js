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
          {/* <p data-aos="fade-left" data-aos-delay="200" >
            Pursuing two minors in <strong>Statistics</strong> and <strong>Mathematics</strong>
          </p> */}
          <p data-aos="fade-left" data-aos-delay="200">
            Trying my best &#x3c;3
          </p>
        </div>
        <hr width="70%"/>
        <div data-aos="fade-right" data-aos-delay="200" class="centered">
          <p class="text">
            Incoming SWE Intern at <strong>Salesforce Tableau</strong> for summer '21
            <br/>
            Incoming SWE Intern at <strong>Facebook</strong> for fall '21
            <br/>
            <br/>
            As of November 2020, I am a Software Engineer Intern at <strong>Motorola Solutions</strong>. 
            I worked as part of the CirrusCentral Mobile team, developing the backend for a mobile application monitoring radio systems data 
            with real time notifications streams from Kafka
            <br/>
            <br/>
            I previously worked at <strong>Caterpillar</strong> and created a visualization and analytics web platform that
            improved efficiency of data lookup and extraction for 700+ users (still growing!)
            <br/>
            <br/>
            I worked at <strong>Ameren</strong> in summer 2019 as part of the Innovation App Development team, redesigning a project management 
            web portal used by PMs, analysts, and executives
            <br/>
            <br/>
            I've been on Course Infrastructure Staff for CS196: Freshman Honors and a Course Assistant for CS125: Intro to Computer Science.
          </p>
        </div>
        <hr width="70%"/>
        <div data-aos="fade-left" data-aos-delay="200" class="centered">
          <p class="text">
            When I'm not working or doing homework, I enjoy teaching, working out, learning new stuff, and cats.
            <br/>
            <br/>
            I love building stuff. Especially stuff that can impact people and make a difference in the world.
            <br/>
            <br/>
            I'm particularly proud of my <a href="https://lialbert.com/uiuc-diversity/" target="_blank" rel="noopener noreferrer"><strong>UIUC Diversity</strong> </a> 
            project, where I (along with Bryant Zhou) interactively display 15 years of racial demographics of every major and college at the University of Illinois.
          </p>
        </div>
      </div>
    );
  }
}