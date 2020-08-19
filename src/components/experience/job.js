import React from 'react';
import './exp.css';

class Job extends React.Component {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.company = props.company;
    this.start = props.start;
    this.end = props.end;
    this.url = props.url;
  }

	render() {
    return(
      <div className="job-main">
        <div className="job-flex">
          <p className="flex-row" role="cell"><a href={this.props.url} rel="noopener noreferrer" target="_blank">{this.props.company}</a></p>
          <p className="flex-row job-title" role="cell"><strong>{this.props.title}</strong></p>
          <p className="flex-row dates" role="cell">{this.props.start} — {this.props.end}</p>
        </div>
      </div>
    );
	}
}
export default Job;