import React from 'react';
import './skills.css';
import Icon from './icon';

function Skills() {
  return (
    <div className="skills-main">
      <h1 className="display-3 skills-title">
        Stuff I've worked with:
      </h1>
      <div className="tech">
        <h1 className="tech-label d-none d-sm-block">
          Languages: 
        </h1>
        <Icon image="python.png" name="Python"/>
        <Icon image="javascript.png" name="JavaScript"/>
        <Icon image="typescript.png" name="TypeScript"/>
        <Icon image="java.png" name="Java"/>
        <Icon image="cpp.png" name="C++"/>
        <Icon image="r.png" name="R"/>
      </div>
      <div className="tech">
        <h1 className="tech-label d-none d-sm-block">
          Frameworks: 
        </h1>
        <Icon image="angular.png" name="Angular"/>
        <Icon image="react.svg" name="React"/>
        <Icon image="android.png" name="Android"/>
        <Icon image="flask.png" name="Flask"/>
        <Icon image="aws.png" name="AWS"/>
        <Icon image="linux.png" name="Linux"/>
      </div>
    </div>
  );
}
export default Skills;


