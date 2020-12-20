import React from 'react';
import './courses.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Courses extends React.Component {
  render() {
    AOS.init();
    return(
      <div className="courses-main">
        <div data-aos-delay="200">
          <h1 className="display-5">
            Cool Courses I've Taken:
          </h1>
          <br/>
          <p>
           💻 Algorithms • System Programming • Database Systems • Programming Languages & Compilers • Data Structures • Computer Architecture 
          </p>
          <br/>
          <p>
            📊 Applied Linear Algebra • Differential Equations • Statistical Analysis • Probability & Statistics I - II • Methods of Applied Statistics
          </p>
        </div>
        <br/>
        <div data-aos-delay="200">
          <h3>In Progress</h3>
          <br/>
          <p>
            Distributed Systems • Computer Security • User Interface Design • Bioinformatics
          </p>
        </div>
      </div>
    );
  }
}