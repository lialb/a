import React from 'react';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  AOS.init();
  return (
    <div className="projects-main">
      <h1 data-aos="fade-up" data-aos-delay="200" className="display-5 projects-title header-font">
        Some Projects:
      </h1>
      <div className='tech'>
        {project('uiuc-diversity.png', 'UIUC Diversity', 
          '15 years of racial demographics of every major and college at the University of Illinois',
          'https://lialbert.com/uiuc-diversity/')}
        {project('tangram.png', 'Tangram', 
          'Tiktok, but 4 way swiping',
          'https://github.com/albearli/tangram')}
      </div>
    </div>
  );
}

function project(image, name, desc, link) {
  return (
    <div className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card">
          <img src={require(`../../Assets/${image}`)} alt="icon" class="project-picture"/>
          <div className="card-container">
            <h3><b>{name}</b></h3>
            <p>{desc}</p>
          </div>
        </div>
      </a>
    </div>
  );

}