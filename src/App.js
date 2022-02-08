import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import './App.css';

import CardContainer from './layout/CardContainer';
import WorkoutContainer from './layout/WorkoutContainer';
import TemplateContainer from './layout/TemplateContainer';
import './styles/shadows.css';
import {
  chestExercises,
  legsExercises,
  coreExercises,
  backExercises,
  cardioExercises,
  warmups,
  breaks
} from './commons/exercises.js';
import workoutTemplates from './commons/workoutTemplates';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedExercises: [],
      templateAdded: false,
      location: '',
      sliderOpen: false,
      templateOpen: false,
      name: '',
    }
  }
  clicked = (passedProps) => {
    let addedExercises = this.state.addedExercises;
    addedExercises.push(passedProps);

    this.setState({
      addedExercises: addedExercises,
      templateAdded: false,
    });
  }
  templateClicked = (template) => {
    let addedExercises = [...template.exercises];
    let location = {...template.location}
    let name = template.name;
    this.setState({
      addedExercises: addedExercises,
      location: location,
      templateAdded: true, 
      name: name,
    });
    this.closeSlider();
  }
  updateExerciseList = (exercises) => {
    let ex = [...exercises];
    this.setState({ 
      addedExercises: ex,
      templateAdded: false });
  }
  updateLocation = (location) => {
    let loc = location;
    this.setState({ 
        location: loc,
        templateAdded: false,
      });
  }
  openSlider = () => {
    document.getElementsByClassName('side-container')[0].style.transform = "translateX(300px)";
    document.getElementsByClassName('main')[0].style.position = "fixed";
    this.setState({ sliderOpen: true });
  }
  closeSlider = () => {
    document.getElementsByClassName('side-container')[0].style.transform = "translateX(0px)";
    document.getElementsByClassName('templates-container')[0].style.transform = "translateX(0px)";
    document.getElementsByClassName('main')[0].style.position = "static";
    this.setState({ sliderOpen: false });
    this.setState({ templateOpen: false });
  }
  openTemplatesBar = () => {
    document.getElementsByClassName('templates-container')[0].style.transform = "translateX(-300px)";
    document.getElementsByClassName('main')[0].style.position = "fixed";
    this.setState({ templateOpen: true });
  }
  
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      headerEl = document.getElementsByClassName("navbar")[0];

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  

  render() {

    let addButtonCode = 
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="5" fill="transparent"/>
        <line x1="20" y1="50" x2="80" y2="50" stroke="black" strokeWidth="3" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="black" strokeWidth="3" />
      </svg>;
    
    let sideBlockerCode = '';

    if (this.state.sliderOpen === true || this.state.templateOpen === true) {
      sideBlockerCode = <div className="side-blocker" onClick={this.closeSlider} ></div>;
    } 

    return (
      <div className="App">
        {sideBlockerCode}
        <div className="navbar shadow-2">
          <h1>Workout Builder</h1>
        </div>  
        <div className="side-container container-left shadow-2">
          <MediaQuery maxWidth={900}>
            <button className="close-slider-button" onClick={this.closeSlider}>
              X
            </button>
          </MediaQuery>
          <h2>Dynamic Warmups</h2>
          <CardContainer 
              exercises={warmups}
              clicked={this.clicked} />
          <h2>Rest</h2>
          <CardContainer 
              exercises={breaks}
              clicked={this.clicked} />
          <h2>Chest</h2>
          <CardContainer 
              exercises={chestExercises}
              clicked={this.clicked} />
          <h2>Legs</h2>
          <CardContainer 
              exercises={legsExercises}
              clicked={this.clicked} />
          <h2>Back</h2>
          <CardContainer 
              exercises={backExercises}
              clicked={this.clicked} />
          <h2>Cardio</h2>
          <CardContainer 
              exercises={cardioExercises}
              clicked={this.clicked} />
          <h2>Core</h2>
          <CardContainer 
              exercises={coreExercises}
              clicked={this.clicked} />
          <div className="bottom-spacer"></div>
        </div>
        <div className="templates-container shadow-2">
          <h2>Workout Templates</h2>
            <TemplateContainer 
                templates={workoutTemplates}
                clicked={this.templateClicked} />
        </div>
        <div className="main">
          <div className="main-container shadow-2">
            <span className="header-2">Directions</span>
            <ol>
              <li>Click to Add Exercises</li>
              <li>Set Number of Reps</li>
              <li>Set Number of Sets</li>
              <li>Drag and Drop to Change the Order</li>
              <li>Click the Export Workout to Copy and Paste the Workout</li>
            </ol>
            <p><em>Tip: for a well-balanced workout, 
                      select an equal number of exercises 
                      from each category.</em></p>
            <MediaQuery maxWidth={900}>
              <button className="add-button shadow-2" onClick={this.openSlider}>
                {addButtonCode}
                <br />
                Add Exercise
              </button>
            </MediaQuery>
            <button className="add-button shadow-2" onClick={this.openTemplatesBar}>
              Add From Template
            </button>
          </div>
          <div className="main-flex"> 
            <div className="main-container shadow-2">
              <h2>Workout:</h2>
              <WorkoutContainer
                  exercises={this.state.addedExercises}
                  name={this.state.name}
                  templateAdded={this.state.templateAdded}
                  location={this.state.location}
                  updateExerciseList={this.updateExerciseList}
                  updateLocation={this.updateLocation} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
