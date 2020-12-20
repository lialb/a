import React from 'react';
import './misc.css';
import Cat from '../../Assets/cat.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Misc() {
  AOS.init();
  return(
    <div className="misc-main">
      <h1 className="display-5 misc-title">Miscellaneous</h1>
      {/* <h1 className="facts-title">Facts:</h1> */}
      <div className="facts">
          <p data-aos="fade-up" data-aos-delay="200">
            I like<a href='https://lichess.org/@/Albear' rel="noopener noreferrer" target='_blank'> chess ♟️</a>
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            Big fan of fútbol ⚽ and basketball 🏀
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            I actually use Vim and Arch (btw)
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            I work hard so my cat (Samwise) can have a better life
          </p >
          <img src={Cat} width="30%" alt="Samwise Cat" data-aos="fade-up" data-aos-delay="200"/>
          <br></br>
          <p>
            This page has been viewed at least &nbsp;<img src="https://stuff.mit.edu/cgi/counter/albearli" alt="counter" className="counter"></img> &nbsp; times
          </p>
      </div>
    </div>
  );
}
export default Misc;