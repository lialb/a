import React from 'react';
import './about.css';
import Portrait from '../../Assets/albertli.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  AOS.init();
  const orange = { color: '#E84A27' };
  const blue = { color: '#0455A4' };
  return (
    <div className="about-main">
      <div className="about-text">
        {/* <h1 data-aos="fade-up" data-aos-delay="200" className="display-5">
        👋 Hey! 
        </h1> */}
        <div className="side-by-side">
          <img data-aos="fade-up" data-aos-delay="200" src={Portrait} width="30%" alt="Albert Li" className="picture"></img>
          <div className="inner-text-container">
            <div className="inner-text">
              <h2 data-aos="fade-left">
                Hey 👋 I am:
              </h2>
              <br/>
              <p data-aos="fade-left" data-aos-delay="200">
                <strong>Albert</strong> Yiliang <strong>Li</strong>
              </p>
              <p data-aos="fade-left" data-aos-delay="200">
                Studying <strong>Computer Science</strong> at The <strong style={orange}>University </strong>
                of <strong style={blue}>Illinois</strong> at
                <strong style={orange}> Urbana</strong>-<strong style={blue}>Champaign</strong>
              </p>
              <p data-aos="fade-left" data-aos-delay="200">
                Trying my best 💛
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr width="70%" />
      <div data-aos="fade-right" data-aos-delay="200" className="centered">
        <p className="text">
          I'm a rising senior at UIUC. I'm currently a Software Engineer Intern at {link('Salesforce', 'https://www.salesforce.com/', 'sf')} / {link('Tableau', 'https://www.tableau.com/', 'tableau')}.
          I'll be working at {link('Facebook', 'https://www.facebook.com', 'fb')} in fall 2021.
          <br/>
          <br/>
          In the past, I've worked at:
        </p>
        <ul className="bullets">
          <li>
            {link('Motorola Solutions', 'https://www.motorolasolutions.com/', 'msi', '📱')} on the CirrusCentral Mobile Team,
            developing the backend for a mobile app monitoring radio systems data in real time
            <ul>
              <li>
                Spring 2021: Smart Insights Team 💡 + Engineering Lead
              </li>
            </ul>
          </li>
          <br/>
          <li>
            {link('Caterpillar', 'https://www.caterpillar.com/', 'cat', '🚜')} creating a visualization / analytics web platform that
            reduced data lookup time for 1000+ engineers, serving 20k+ queries daily
          </li>
          <br/>
          <li>
            {link('Ameren', 'https://www.ameren.com/', 'ameren', '⚡')} redesigning a project management
            web portal used by PMs, analysts, and executives
          </li>
        </ul>
        <p className="text">
          I also helped teach <strong>CS 196: Freshman Honors</strong> (PM, <a href="http://cs196.cs.illinois.edu/" target="_blank" rel="noopener noreferrer"><strong>website</strong></a>
          , & grading) and <strong>CS 125: Intro to CS</strong> (Course Assistant)
        </p>
      </div>
      <hr width="70%" />
    </div>
  );
}

function link(name, link, cssName, emoji=null) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <span className={cssName}>{name}</span> {emoji}
    </a>
  );
}