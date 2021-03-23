import React from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Drawing from '../../Assets/drawing.jpg';

function Home() {
  AOS.init();
  return (
    <div className="home-main">
      <img src={Drawing} className="home-drawing"/>
      <div className="home-text">
        {/* <h1 data-aos="fade-left" data-aos-delay="600" className="display-3">hello, world</h1>
        <h1 data-aos="fade-right" data-aos-delay="600" className="display-3">I'm Albert Li</h1> */}
        <p className="home-title">hello, i am albert</p>
      </div>
      <div className="social-icons">
        <br/>
        <a href="mailto:albert.yiliang@gmail.com">
          <FontAwesomeIcon icon="envelope" className="social-icon-black" size="2x"/>
        </a>
        <a href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} className="social-icon-black" size="2x"/>
        </a>
        <a href="https://www.linkedin.com/in/albs/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-icon-black" size="2x"/>
        </a>
        <a href="./Albert-Li-Resume.pdf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="file-alt" className="social-icon-black" size="2x"/>
        </a>
      </div>
    </div>
  );
}

export default Home;
