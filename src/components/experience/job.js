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
          <p className="flex-row" role="cell"><a href={this.props.url} target="_blank">{this.props.company}</a></p>
          <p className="flex-row" role="cell">{this.props.title}</p>
          <p className="flex-row" role="cell">{this.props.start} - {this.props.end}</p>
        </div>
      </div>
    );
	}
}
export default Job;