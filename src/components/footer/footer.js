import React from 'react';
import './footer.css';
import Resume from '../../Assets/Albert-Li-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return(
    <div className="footer-main">
      <div className="social-icons">
        <br/>
        <a href="mailto:albert.yiliang@gmail.com">
          <FontAwesomeIcon icon="envelope" className="social-icon-white"/>
        </a>
        <a href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} className="social-icon-white" size="lg"/>
        </a>
        <a href="https://www.linkedin.com/in/albs/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-icon-white" size="lg"/>
        </a>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="file-alt" className="social-icon-white" size="lg"/>
        </a>
      </div>
        <p className="credit">
          Made by Albert ✨ 2020
        </p>
    </div>
  );
}
export default Footer;