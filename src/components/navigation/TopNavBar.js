import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './TopNavBar.css';
import GithubLogo from '../../Assets/github_white.png';
import LinkedInLogo from '../../Assets/linkedin_white.png';

export default class TopNavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className=""><Link onClick={this.scrollToTop}>Albert Li</Link></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link><Link 
           activeClass="active"
           to="about"
           spy={true}
           smooth={true}
           offset={-5}
           duration={500}>About</Link></Nav.Link>
          <Nav.Link><Link 
           activeClass="active"
           to="skills"
           spy={true}
           smooth={true}
           offset={10}
           duration={500}>Skills</Link></Nav.Link>
          <Nav.Link><Link 
           activeClass="active"
           to="experience"
           spy={true}
           smooth={true}
           offset={15}
           duration={500}>Experience</Link></Nav.Link>
          {/* <Nav.Link><Link 
           activeClass="active"
           to="projects"
           spy={true}
           smooth={true}
           offset={10}
           duration={500}>Projects</Link></Nav.Link> */}
          <Nav.Link><Link 
           activeClass="active"
           to="misc"
           spy={true}
           smooth={true}
           offset={10}
           duration={500}>Miscellaneous</Link></Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Navbar.Brand href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
            <img
              src={ GithubLogo }
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="github-logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/albearli/" target="_blank" rel="noopener noreferrer">
            <img
              src={ LinkedInLogo }
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="github-logo"
            />
          </Navbar.Brand>
          </Nav>
      </Navbar>
    );
  }
}