import React from 'react';
import './exp.css';

export default function Job(props) {
  return(
    <div className="job-main">
      <div className="job-flex">
        <p className="flex-row" role="cell"><a href={props.url} rel="noopener noreferrer" target="_blank">{props.company}</a></p>
        <p className="flex-row job-title" role="cell"><strong>{props.title}</strong></p>
        <p className="flex-row dates" role="cell">{props.start} — {props.end}</p>
      </div>
    </div>
  );
}