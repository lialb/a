import React, { Component } from 'react';
import './about.css';
import Portrait from '../../Assets/albertli.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GithubLogo from '../../Assets/github_black.png';
import LinkedInLogo from '../../Assets/linkedin_black.png';

export default class About extends Component {
  render() {
    AOS.init();
    return(
      <div className="about-main">
        <div className="about-text">
          <h1 data-aos="fade-up" data-aos-delay="200" className="display-5">
            Hey!
          </h1>
          <img data-aos="fade-up" data-aos-delay="200" src={Portrait} width="30%" alt="Albert Li" className="picture"></img>
          <h2 data-aos="fade-left">
            I am: 
          </h2>
          <p data-aos="fade-left" data-aos-delay="200">
            <strong>Albert</strong> Yiliang <strong>Li</strong>
          </p>
          <p data-aos="fade-left" data-aos-delay="200">
            Studying <strong>Computer Science</strong> at The University of Illinois at Urbana-Champaign
          </p>
          <p data-aos="fade-left" data-aos-delay="200">
            Trying my best &#x3c;3
          </p>
        </div>
        <hr width="70%"/>
        <div data-aos="fade-right" data-aos-delay="200" className="centered">
          <p className="text">
            I'm a junior at UIUC. I'll be a Software Engineer Intern at <strong>Salesforce - Tableau</strong> and <strong>Facebook</strong> in 2021.
            <br/>
            <br/>
            In the past, I've worked at:
          </p>
          <ul className="bullets">
            <li>
              <strong>Motorola Solutions</strong> 📱 on the CirrusCentral Mobile Team,
              developing the backend for a mobile app monitoring radio systems data with real time notifications streams from Kafka
            </li>
            <br/>
            <li>
              <strong>Caterpillar</strong> 🚜 creating a visualization / analytics web platform that
              improved efficiency of data lookup for 700+ engineers (still growing!)
            </li>
            <br/>
            <li>
              <strong>Ameren</strong> ⚡ redesigning a project management 
              web portal used by PMs, analysts, and executives
            </li>
          </ul>
          <p className="text">
            I also helped teach <strong>CS 196: Freshman Honors</strong> and <strong>CS 125: Intro to CS</strong>
          </p>
        </div>
        <hr width="70%"/>
        <div data-aos="fade-left" data-aos-delay="200" class="centered">
          <p class="text">
            When I'm not working or doing homework, I enjoy teaching, working out, learning new stuff, and cats.
            <br/>
            <br/>
            I'm particularly proud of my <a href="https://lialbert.com/uiuc-diversity/" target="_blank" rel="noopener noreferrer"><strong>UIUC Diversity</strong> </a> 
            project, interactively displaying 15 years of racial demographics of every major and college at the University of Illinois.
          </p>
          <br/>
          <a href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
            <img className="github-logo" src={GithubLogo} alt="Github"/>
          </a>
          <a href="https://www.linkedin.com/in/albs/" target="_blank" rel="noopener noreferrer">
            <img className='linkedin-logo' src={LinkedInLogo} alt="LinkedIn"/>
          </a>
        </div>
      </div>
    );
  }
}