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
            Relevant Courses I've Taken:
          </h1>
          <br/>
          <p>
            Algorithms & Models of Computation (374), Data Structures (225), Computer Architecture (233), Ethics in CS (210), Discrete Structures (173), Honors (196 & 296)
          </p>
          <p>
            Applied Linear Algebra (415), Differential Equations (441), Statistical Analysis (200), Probability & Statistics I and II (400 & 410),  Methods of Applied Statistics (420)
          </p>
        </div>
        <br/>
        <div data-aos-delay="200">
          <h3>In Progress</h3>
          <br/>
          <p>
            System Programming (241), Numerical Methods (357), Database Systems (411), Programming Languages & Compilers (421)
          </p>
        </div>
      </div>
    );
  }
}