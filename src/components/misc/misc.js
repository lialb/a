import React from 'react';
import './misc.css';
import Cat from '../../Assets/cat.jpg';

function Misc() {
  return(
    <div className="misc-main">
      <h1 className="display-3 misc-title">Miscellaneous</h1>
      {/* <h1 className="facts-title">Facts:</h1> */}
      <div className="facts">
          <p>
            This page has been viewed at least &nbsp;<img src="http://stuff.mit.edu/cgi/counter/albearli" alt="several" className="counter"></img> &nbsp; times
          </p>
          <p>
            I am avid <a href='https://lichess.org/@/Albear' target='_blank'>chess player</a>
          </p>
          <p>
            I enjoy playing soccer and basketball
          </p>
          <p>
            I actually use Vim and Arch (btw)
          </p>
          <p>
            I have a fat cat named Samwise
          </p>
          <img src={Cat} width="30%"/>

      </div>
    </div>
  );
}
export default Misc;