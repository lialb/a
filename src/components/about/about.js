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
          <h1 data-aos="fade-up" className="display-5">
            About
          </h1>
          <img data-aos="fade-up" data-aos-delay="100" src={Portrait} width="30%" alt="Albert Li"></img>
          <h2 data-aos="fade-left">
            I am: 
          </h2>
          <p data-aos="fade-left" data-aos-delay="300">
            Albert Yiliang Li
          </p>
          <p data-aos="fade-left" data-aos-delay="300">
            Studying Computer Science at The University of Illinois at Urbana-Champaign
          </p>
          <p data-aos="fade-left" data-aos-delay="300" >
            Pursuing two minors in Statistics and Mathematics
          </p>
          <p data-aos="fade-left" data-aos-delay="300">
            Trying my best
          </p>
        </div>
        <hr/>
        <div data-aos="fade-right" data-aos-delay="300">
          <p>
            As of 03/17/2020, I am a Software Engineering Co-op at Caterpillar, part of the Product Visual Analytics group in the Advanced Analytics Division.
          </p>
          <p>
            I help out Engineers by creating visualization and analytics software, improving speed and efficiency of data analysis and extraction.
          </p>
          <p>
            In Summer 2020, I will be interning at Motorola Solutions, hopefully changing the world in some way :)
          </p>
        </div>
        <hr/>
        <div data-aos="fade-left" data-aos-delay="300">
          <p>
            As a student at UIUC, I enjoy all things tech, data science, and ML.
          </p>
          <p>
            When I'm not working or doing homework, I enjoy learning something new, working out, and cats.
          </p>
        </div>
      </div>
    );
  }
}