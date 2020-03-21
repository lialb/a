import React from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  AOS.init();
  return (
    <div className="home-main">
      <div className="home-text">
        <h1 data-aos="fade-left" data-aos-delay="300" className="display-3 ">hello, world</h1>
        <h1 data-aos="fade-right" data-aos-delay="300" className="display-3">I'm Albert Li</h1>
      </div>
    </div>
  );
}

export default Home;
