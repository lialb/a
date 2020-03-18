import React from 'react';
import './skills.css';

class Icon extends React.Component {

  constructor(props) {
    super(props);
    this.image = props.image;
    this.name = props.name;
  }

	render() {
    return(
      <div className="icon-main">
        <img src={require(`../../Assets/tech_icons/${this.props.image}`)} width="70vh" className="icon-logo" alt="icon"/>
        <p>{this.props.name}</p>
      </div>
    );
	}
}
export default Icon;