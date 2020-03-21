import React from 'react';
import './exp.css';
import Job from './job';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  AOS.init();
  return(
    <div className="exp-main">
      <h1 data-aos="fade-up" className="display-5 exp-title">
        Experience
      </h1>
      <div data-aos="fade-up" className="jobs">
        <Job title="Software Engineering Intern" company="Motorola Solutions Inc." start="May 2020" end="TBD" url="https://www.motorolasolutions.com/en_us.html"/>
        <hr/>
        <Job title="Project Manager & Course Staff" company="CS 196: Freshman Honors" start="Jan. 2020" end="Present" url="http://cs196.cs.illinois.edu/"/>
        <hr/>
        <Job title="Software Engineering Co-op" company="Caterpillar Inc." start="Aug. 2019" end="May 2020" url="https://www.caterpillar.com/en.html"/>
        <hr/>
        <Job title="Software Engineering Intern" company="Ameren" start="May 2019" end="Aug. 2019" url="https://www.ameren.com/"/>
        <hr/>
        <Job title="Course Assistant" company="CS 125: Introduction to Computer Science" start="Jan. 2019" end="May 2019" url="https://cs125.cs.illinois.edu/"/>
      </div>
    </div>
  );
}
export default Experience;