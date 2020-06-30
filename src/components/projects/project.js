import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
     this.title = props.title;
     this.image = props.image; 
     this.url = props.url;
  }

  render() {
    return (
      <div className="project-main">
        <img src={require(`../../Assets/projects/${this.props.image}`)} width="60vw" className="icon-logo" alt="icon"/>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Project;