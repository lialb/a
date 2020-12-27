import React from 'react';
import './footer.css';
import GithubLogo from '../../Assets/github_white.png';
import LinkedInLogo from '../../Assets/linkedin_white.png';
// import EmailIcon from '../../Assets/email_white.png';

function Footer() {
  return(
    <div className="footer-main">
      <div>
        {/* <a href="mailto:albert.yiliang@gmail.com">
          <img className="github-logo" src={EmailIcon} alt="Github"/>
        </a> */}
        <a href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
          <img className="github-logo" src={GithubLogo} alt="Github"/>
        </a>
        <a href="https://www.linkedin.com/in/albs/" target="_blank" rel="noopener noreferrer">
          <img className='linkedin-logo' src={LinkedInLogo} alt="LinkedIn"/>
        </a>
        <p className="credit">
          <a href="mailto:albert.yiliang@gmail.com" className="email-link">albert.yiliang@gmail.com</a> • Made by Albert Li 2020
        </p>
      </div>
    </div>
  );
}
export default Footer;