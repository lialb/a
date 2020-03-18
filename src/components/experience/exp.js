import React from 'react';
import './exp.css';
import Job from './job';

function Experience() {
  return(
    <div className="exp-main">
      <h1 className="display-3 exp-title">
        Experience
      </h1>
      <div className="jobs">
        <Job title="Software Engineering Intern" company="Motorola Solutions Inc." start="May 2020" end="TBD" url="https://www.motorolasolutions.com/en_us.html"/>
        <Job title="Project Manager and Course Staff" company="CS 196: Freshman Honors" start="Jan. 2020" end="Present" url="http://cs196.cs.illinois.edu/"/>
        <Job title="Software Engineering Co-op | Product Visual Analytics" company="Caterpillar Inc." start="Aug. 2019" end="May 2020" url="https://www.caterpillar.com/en.html"/>
        <Job title="Software Engineering Intern | Ameren Digital" company="Ameren Corporation" start="May 2019" end="Aug. 2019" url="https://www.ameren.com/"/>
        <Job title="Course Assistant" company="CS 125: Introduction to Computer Science" start="Jan. 2019" end="May 2019" url="https://cs125.cs.illinois.edu/"/>
      </div>
    </div>
  );
}
export default Experience;