import React, { Component } from 'react';
import './TemplateContainer.css';

import Template from '../components/Template';

class TemplateContainer extends Component {

  clicked = (template) => {
    this.props.clicked(template);
  }

  getCards = () => {
    let cards = [];
    let count = 0;
    for (let temp in this.props.templates) {
      cards.push(
        <Template
            key={count}
            template={this.props.templates[temp]}
            clicked={this.clicked} />
      );
      count++;
    }
    return cards;
  }


  render() {
    let cards = this.getCards();
    return (
      <div className="template-container">
        {cards}
      </div>
    );
  }
}

export default TemplateContainer;