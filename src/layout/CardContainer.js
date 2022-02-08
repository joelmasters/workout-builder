import React, { Component } from 'react';
import './CardContainer.css';

import Card from '../components/Card';

class CardContainer extends Component {

  clicked = (passedProps) => {
    this.props.clicked(passedProps);
  }

  getCards = () => {
    let cards = [];
    let count = 0;
    for (let ex in this.props.exercises) {
      cards.push(
        <Card
            key={count}
            exercises={this.props.exercises[ex]}
            clicked={this.clicked} />
      );
      count++;
    }
    return cards;
  }


  render() {
    let cards = this.getCards();
    return (
      <div className="card-container">
        {cards}
      </div>
    );
  }
}

export default CardContainer;