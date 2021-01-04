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

  state = {
    background: true
  };

  scrollEvent = () => {
    if (window.pageYOffset === 0) {
      this.setState({
        background: true
      });
    } else if (this.state.background) {
      this.setState({
        background: false
      });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }
  
  render() {
    return (
      <Navbar className="navbar-main" fixed="top" variant="dark" expand="lg" style={{ background: this.state.background ? "none" : "" }}>
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
              <strong>about</strong>
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
              <strong>skills</strong>
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
              <strong>more</strong>
            </Link>
          </Nav.Link>
          <Nav.Link href="./Albert-Li-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <strong>resume</strong>
          </Nav.Link>
        </Nav>
        {/* <Nav className="ml-auto">
          <Navbar.Brand href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} className="social-icon-white" size="lg"/>
          </Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/albs/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-icon-white" size="lg"/>
          </Navbar.Brand>
        </Nav> */}
      </Navbar>
    );
  }
}