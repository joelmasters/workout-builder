import React, { Component } from 'react';
import './Template.css';
import '../styles/shadows.css';

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  clicked = () => {
    this.props.clicked(this.props.template);
  }

  render() {
    const { name, description } = this.props.template;

    return (
      <div className="template-card shadow-2" onClick={this.clicked}>
        <div className="template-card__title-box">
          <div className="template-card__title">
            {name}
          </div>
        </div>
        <div className="template-card__description">
          {description}
        </div>
      </div>
    );
  }
}

export default Template;
