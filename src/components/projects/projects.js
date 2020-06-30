import React from 'react';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  AOS.init();
  return(
    <div className="projects-main">
      <h1 className="display-5">
        Projects
      </h1>
    </div>
  );
}

export default Projects;