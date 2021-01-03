import React, { Component } from 'react';
import './about.css';
import Portrait from '../../Assets/albertli.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class About extends Component {
  render() {
    AOS.init();
    const orange = { color: '#E84A27' };
    const blue = { color: '#0455A4' };
    return (
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
            Studying <strong>Computer Science</strong> at The <strong style={orange}>University </strong>
            of <strong style={blue}>Illinois</strong> at
            <strong style={orange}> Urbana</strong>-<strong style={blue}>Champaign</strong>
          </p>
          <p data-aos="fade-left" data-aos-delay="200">
            Trying my best &#x3c;3
          </p>
        </div>
        <hr width="70%" />
        <div data-aos="fade-right" data-aos-delay="200" className="centered">
          <p className="text">
            I'm a junior at UIUC. I'll be a Software Engineer Intern at <strong className="tableau">Salesforce - Tableau</strong> and <strong className="fb">Facebook</strong> in 2021.
            <br />
            <br />
            In the past, I've worked at:
          </p>
          <ul className="bullets">
            <li>
              <strong className="msi">Motorola Solutions</strong> 📱 on the CirrusCentral Mobile Team,
              developing the backend for a mobile app monitoring radio systems data in real time
            </li>
            <br />
            <li>
              <strong className="cat">Caterpillar</strong> 🚜 creating a visualization / analytics web platform that
              improved efficiency of data lookup for 700+ engineers (still growing!)
            </li>
            <br />
            <li>
              <strong className="ameren">Ameren</strong> ⚡ redesigning a project management
              web portal used by PMs, analysts, and executives
            </li>
          </ul>
          <p className="text">
            I also helped teach <strong>CS 196: Freshman Honors</strong> (PM, <a href="http://cs196.cs.illinois.edu/" target="_blank" rel="noopener noreferrer"><strong>website</strong></a>
            , & grading) and <strong>CS 125: Intro to CS</strong> (Course Assistant)
          </p>
        </div>
        <hr width="70%" />
        <div data-aos="fade-left" data-aos-delay="200" className="centered">
          <p className="text">
            I'm particularly proud of my 🌎 <a href="https://lialbert.com/uiuc-diversity/" target="_blank" rel="noopener noreferrer"><strong>UIUC Diversity</strong> </a>
            project, interactively displaying 15 years of racial demographics of every major and college at the University of Illinois.
            <br />
            <br />
          </p>
          {/* <div className="social-icons">
            <a href="mailto:albert.yiliang@gmail.com">
              <FontAwesomeIcon icon="envelope" className="social-icon" size="lg"/>
            </a>
            <a href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} className="social-icon" size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/albs/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-icon" size="lg" />
            </a>
            <a href="Albert-Li-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="file-alt" className="social-icon" size="lg" />
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}