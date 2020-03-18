import React, { Component } from 'react';
import './about.css';
import Portrait from '../../Assets/albertli.JPG';

export default class About extends Component {
  render() {
    return(
      <div className="about-main">
        <div className="about-text">
          <h1 className="display-3">
            About
          </h1>
          <img src={Portrait} width="30%"></img>
          <h3>
            I am: 
          </h3>
          <p>
            Studying Computer Science at The University of Illinois at Urbana-Champaign
          </p>
          <p>
            Pursuing two minors in Statistics and Mathematics
          </p>
          <p>
            Trying my best
          </p>
        </div>
        <hr/>
        <div>
          <p>
            As of 03/17/2020, I am a Software Engineering Intern at Caterpillar, part of the Advanced Analytics Division.
            I help out Engineers by creating software solutions, apps, and websites.
          </p>
          <p>
            In Summer 2020, I will be interning at Motorola Solutions, hopefully changing the world in some way.
          </p>
        </div>
        <hr/>
        <div>
          <p>
            As a student at UIUC, I enjoy all things math, statistics, and data science (hence the double minor). When I'm not working or doing homework,
          </p>
          <p>
            I enjoy learning something new, working out, and cats.
          </p>
        </div>
      </div>
    );
  }
}