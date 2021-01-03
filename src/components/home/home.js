import React from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  AOS.init();
  /**
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { 
      delta /= 2; 
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; ++i) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  */
  return (
    <div className="home-main">
      <div className="home-text">
        <h1 data-aos="fade-left" data-aos-delay="600" className="display-3">hello, world</h1>
        <h1 data-aos="fade-right" data-aos-delay="600" className="display-3">I'm Albert Li</h1>
      </div>
      <div className="social-icons">
        <br/>
        <a href="mailto:albert.yiliang@gmail.com">
          <FontAwesomeIcon icon="envelope" className="social-icon-white" size="2x"/>
        </a>
        <a href="https://github.com/albearli" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} className="social-icon-white" size="2x"/>
        </a>
        <a href="https://www.linkedin.com/in/albs/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-icon-white" size="2x"/>
        </a>
        <a href="./Albert-Li-Resume.pdf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="file-alt" className="social-icon-white" size="2x"/>
        </a>
      </div>
        {/* <h1 className="display-3">I'm
          <span
            className="txt-rotate"
            data-period="2000"
            data-rotate='[ " Albert Li", " a developer", " an adventurer", " trying my best" ]'>
          </span>
        </h1> */}
    </div>
  );
}

export default Home;
