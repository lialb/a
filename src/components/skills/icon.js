import React from 'react';
import './skills.css';

export default function Icon(props) {
  return (
    <div className="icon-main">
      <img src={require(`../../Assets/tech_icons/${props.image}`)} width="60vw" className="icon-logo" alt="icon"/>
      <p>{props.name}</p>
    </div>
  );
}