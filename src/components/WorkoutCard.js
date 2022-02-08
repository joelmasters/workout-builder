import React, { Component } from 'react';
import './Card.css';
import './WorkoutCard.css';
import '../styles/shadows.css';

class WorkoutCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.exercises.num,
      unit: this.props.exercises.unit,
    }
  }

  clicked = () => {
    this.props.clicked(this.props);  
  }

  changeUnit = (e) => {
    this.props.changeUnit(e.target.value, this.props.index);
    this.setState({ unit: e.target.value });
  }
  changeNum = (e) => {
    this.props.changeNum(e.target.value, this.props.index);
    this.setState({ num: e.target.value });
  }

  componentDidMount = () => {
    
  }

  renderNums = () => {
    let options = [];
    const nums = ['N/a', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30, 40,
                  50, 60, 70, 80, 90, 100];

    /*let defaultVal = 
      <option value={this.props.exercises.num.toString()}>{this.props.exercises.num}</option>;*/
    for (let i = 0; i < nums.length; i++) {
      options.push(<option value={nums[i].toString()}>{nums[i]}</option>); 
    }
    
    //options.unshift(defaultVal);
    return options;
  }

  /*renderUnits = () => {
    let options = [];
    const units = ['Reps'];

    let defaultVal = 
      <option value={this.props.exercises.num.toString()}>{this.props.exercises.num}</option>;
    for (let i = 0; i < nums.length; i++) {
      options.push(<option value={nums[i].toString()}>{nums[i]}</option>); 
    }
    
    options.unshift(defaultVal);
    return options;
  }*/

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

    let catCardStyle = {};
    if (category === "Break") {
      if (name === "Repeat") {
        catCardStyle = {
          border: `1px solid ${cardColor}`,
          borderRight: `12px solid ${cardColor}`,
          marginTop: '5px',
          marginBottom: '15px',
        }
      } else {
        catCardStyle = {
          border: `1px solid ${cardColor}`,
          borderRight: `12px solid ${cardColor}`,
          marginTop: '15px',
          marginBottom: '15px',
        }
      } 
    } else {
      catCardStyle = {
        border: `1px solid ${cardColor}`,
        borderRight: `12px solid ${cardColor}`,
      }
    }

    let deleteCover = '';

    if (this.props.isDragging && (this.props.draggingOver === null || this.props.draggingOver === "trash")) {
      deleteCover = <div className="workout-card__delete-cover">Remove</div>;
    }

    let numsOptions = this.renderNums();
    //let unitOptions = this.renderUnits();

    return (
      <div className="workout-card no-select shadow-1" style={catCardStyle} >
        {deleteCover}
        <div className="workout-card__block workout-card__start">{name}</div>
        <div className="workout-card__block workout-card__num">
          <select value={this.props.exercises.num} onChange={this.changeNum}>
            {numsOptions}
          </select>
        </div>
        <div className="workout-card__block workout-card__unit">
          <select value={this.props.exercises.unit} onChange={this.changeUnit}>
            <option value="Reps">Reps</option>
            <option value="Seconds">Seconds</option>
            <option value="Minutes">Minutes</option>
            <option value="Laps">Laps</option>
            <option value="Yards">Yards</option>
            <option value="Times">Times</option>
            <option value="N/a">N/a</option>
          </select>
        </div>
        {/*<div className="workout-card__cat">
          {this.props.category}
      </div>*/}
        {/*<div className="workout-card__block">Sets:&nbsp; 
          <select defaultValue="3">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
      </div>*/}
        {/*<div className="workout-card__block">Time: {this.props.time} min.</div>*/}
      </div>
    );
  }
}

export default WorkoutCard;
