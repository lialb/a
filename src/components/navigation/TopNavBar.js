import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './TopNavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TopNavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar className="navbar-main" fixed="top" variant="dark" expand="lg">
        <Navbar.Brand className="navbar-name">
          <Link onClick={this.scrollToTop}>
            <FontAwesomeIcon icon="home" className="social-icon-white home-button" size="lg"/>
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}>
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}>
              Skills
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="misc"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}>
              Me
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}>
              Contact
              </Link>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Navbar.Brand href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} className="social-icon-white" size="lg"/>
          </Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/albs/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-icon-white" size="lg"/>
          </Navbar.Brand>
        </Nav>
      </Navbar>
    );
  }
}