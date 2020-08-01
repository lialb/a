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
            Albert Yiliang Li
          </p>
          <p data-aos="fade-left" data-aos-delay="200">
            Studying Computer Science at The University of Illinois at Urbana-Champaign
          </p>
          <p data-aos="fade-left" data-aos-delay="200" >
            Pursuing two minors in Statistics and Mathematics
          </p>
          <p data-aos="fade-left" data-aos-delay="200">
            Trying my best
          </p>
        </div>
        <hr/>
        <div data-aos="fade-right" data-aos-delay="200">
          <p>
            As of 06/06/2020, I am a Software Engineer Intern at Motorola Solutions, part of the Cirrus Mobile team.
          </p>
          <p>
            I am developing the backend for a mobile application monitoring radio systems data with real time notifications streams from Kafka.
          </p>
          <p>
            My previous position was a Software Engineering Co-Op at Caterpillar, part of the Product Visual Analytics team (PVA)
          </p>
          <p>
            I helped out engineers by creating a visualization and analytics web platform called the "1-Click Tool", improving speed and efficiency of data lookup and extraction for 500+ users (still growing!).
          </p>
        </div>
        <hr/>
        <div data-aos="fade-left" data-aos-delay="200">
          <p>
            As a student at UIUC, I enjoy all things tech, data science, and ML.
          </p>
          <p>
            When I'm not working or doing homework, I enjoy learning something new, teaching, working out, and cats.
          </p>
        </div>
      </div>
    );
  }
}