import React, { Component } from 'react';
import './Card.css';
import '../styles/shadows.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
    }
  }

  clicked = () => {
    this.setState({ added: true });
    this.props.clicked(this.props.exercises);
    setTimeout(() => this.setState({ added: false }), 1000);  
  }

  render() {
    let name = this.props.exercises.name;
    let category = this.props.exercises.category;

    const colors = {
      red: '#E1413C',
      blue: '#0598EC',
      yellow: '#F8B23D',
      green: '#009D60',
      purple: '#762182',
      gray: '#515969',
      tealBlue: '#005F78'
    }
    let cardColor = '#AAA';

    switch(category) {
      case('Warmup'):
        cardColor = colors.blue;
        break;
      case('Cardio'):
        cardColor = colors.red;
        break;
      case('Chest'):
        cardColor = colors.green;
        break;
      case('Back'):
        cardColor = colors.yellow;
        break;
      case('Legs'):
        cardColor = colors.purple;
        break;
      case('Core'):
        cardColor = colors.tealBlue;
        break;
      default:
        break;
    }

    let catCardStyle = {
      backgroundColor: cardColor,
    }

    let addedBlock = '';
    if (this.state.added) {
      addedBlock = 
        <div className="added-block">
          <div className="added-block__text">Added!</div>
        </div>;
    }

    return (
      <div className="card shadow-2" onClick={this.clicked}>
        {addedBlock}
        <span className="card__title">{name}</span>
        <br />
        <div className="card__bottom" style={catCardStyle}>
          {category}
        </div>
      </div>
    );
  }
}

export default Card;
