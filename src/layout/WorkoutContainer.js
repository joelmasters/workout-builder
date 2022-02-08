import React, { Component } from 'react';
import './WorkoutContainer.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import WorkoutCard from '../components/WorkoutCard';
import Chart from '../components/Chart';
import locations from '../commons/locations.js';

class WorkoutContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalTime: 0,
      numCardio: 0,
      numLegs: 0,
      numChest: 0,
      numBack: 0,
      numCore: 0,
      exercises: [],
      exportOpen: false,
      deleteOpen: false,
      location: {
        name: "Select Location",
      },
      name: "",
    }
  }

  changeUnit = (val, index) => {
    let ex = [...this.state.exercises];
    ex[index].unit = val; 
    this.setState({
      exercises: ex,
    }, () => this.saveStateToLocalStorage());
  }
  changeNum = (val, index) => {
    let ex = [...this.state.exercises];
    ex[index].num = val; 
    this.setState({
      exercises: ex,
    }, () => this.saveStateToLocalStorage());
  }
  handleLocChange = (e) => {
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].name === e.target.value) {
        this.setState({ location: locations[i] }, () => this.saveStateToLocalStorage());
        this.props.updateLocation(locations[i]);
      }
    }
  }

  openExport = () => {
    if (this.state.exportOpen === false) {
      this.setState({ exportOpen: true }, this.selectText);
    }
  }
  closeExport = () => {
    if (this.state.exportOpen === true) {
      this.setState({ exportOpen: false }, () => this.saveStateToLocalStorage());
    }
  }
  selectText = () => {
    let el = document.getElementsByClassName("export-box")[0];
    el.focus();
    setTimeout(() => {
      el.setSelectionRange(0, 9999);
    }, 1);
  }
  
  openDeleteDialog = () => {
    this.setState({ deleteOpen: true });
  }
  closeDeleteDialog = () => {
    this.setState({ deleteOpen: false });
  }
  deleteWorkout = () => {
    localStorage.clear();
    this.props.updateExerciseList([]);
    this.setState({
      totalTime: 0,
      numCardio: 0,
      numLegs: 0,
      numChest: 0,
      numBack: 0,
      numCore: 0, 
      exercises: [],
      exportOpen: false,
      deleteOpen: false,
      location: {
        name: "Select Location",
      },
      name: "",
     });
  }

  createSummary = (props) => {
    let totalTime = 0;
    let numCardio = 0;
    let numBack = 0;
    let numLegs = 0;
    let numChest = 0;
    let numCore = 0;

    for (let i = 0; i < props.exercises.length; i++) {
      //totalTime += this.props.exercises[i].time;
      switch(props.exercises[i].category) {
        case 'Chest':
          numChest++;
          break;
        case 'Legs':
          numLegs++;
          break;
        case 'Back':
          numBack++;
          break;
        case 'Cardio':
          numCardio++;
          break;
        case 'Core':
          numCore++;
          break;
        default:
          break;
      } 
    }
    this.setState({
      totalTime: totalTime,
      numCardio: numCardio,
      numBack: numBack,
      numLegs: numLegs,
      numChest: numChest,
      numCore: numCore,
    });
  }

  onDragEnd = (result) => {
    let exercises = [...this.state.exercises];
    const from = result.source.index;
    let to = '';

    if (result.destination !== null && result.destination.droppableId !== 'trash' ) {
      to = result.destination.index;
      exercises[to] = exercises[from];
      if (to < from) {
        // moved up
        for (let i = to+1; i <= from; i++) {
          exercises[i] = this.state.exercises[i-1];
        }
      } else {
        // moved down
        for (let i = to-1; i >= from; i--) {
          exercises[i] = this.state.exercises[i+1];
        }
      }   
      this.setState({ exercises: exercises }, () => this.saveStateToLocalStorage());
    } else {
      exercises.splice(from, 1);
      this.setState({ exercises: exercises }, () => this.saveStateToLocalStorage());
      this.props.updateExerciseList(exercises);
    }
  }

  getStyle = (style, snapshot) => {
    if (!snapshot.isDropAnimating) {
      return style;
    } else if (snapshot.isDropAnimating && (snapshot.draggingOver === null || snapshot.isdragginOver === 'trash')) {
      return {
        ...style,
        // cannot be 0, but make it super tiny,
        opacity: '0.2',
        transitionDuration: `0.001s`,
      };
    } else {
      return style;
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.templateAdded) {
      this.setState({ 
        exercises: nextProps.exercises,
        location: nextProps.location, 
        name: nextProps.name
      }, () => this.saveStateToLocalStorage());
    } else if (nextProps.exercises.length > this.state.exercises.length) {
      let exercises = [...this.state.exercises];
      exercises.push(nextProps.exercises[nextProps.exercises.length-1]);
      this.setState({ exercises: exercises }, () => this.saveStateToLocalStorage());
    }
    this.createSummary(nextProps);
  }

  saveStateToLocalStorage = () => {
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
    this.props.updateExerciseList(this.state.exercises);
  }

  hydrateStateWithLocalStorage = () => {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          if (key === "exercises") {
            this.setState({ [key]: value }, () => this.props.updateExerciseList(this.state.exercises));
          } else {
            this.setState({ [key]: value });
          }
        } catch (e) {
          // handle empty string
          //controller.initializeValue(key, value);
        }
      }
    }
  }

  componentDidMount = () => {
    this.hydrateStateWithLocalStorage();
  }

  render() {
    let trashCanCode = '';
    let exportButtonCode = '';
    let deleteButtonCode = '';
    if (this.state.exercises.length > 0) {
      trashCanCode = 
        <Droppable droppableId="trash">
          {(provided, snapshot) => (
            <div 
              ref={provided.innerRef}
              {...provided.draggableProps}
              >
                <button className="trash-btn shadow-1"
                  style={{ backgroundColor: snapshot.isDraggingOver ? '#FFF' : '#777' }} >
                  <div className="trash-text"
                    style={{ color: snapshot.isDraggingOver ? '#000' : '#FFF' }}>  
                    Drag here to delete
                  </div>
                </button>
            </div>
          )}
        </Droppable>; 
      exportButtonCode =
          <button className="export-btn shadow-2" onClick={this.openExport}>
            <div className="export-btn__text">
              Export Workout
            </div>
          </button>;
      deleteButtonCode = 
          <button className="delete-btn shadow-2" onClick={this.openDeleteDialog}>
            <div className="btn-text">
              Delete Workout
            </div>
          </button>;
    }

    let exportCode = '';
    let exportBlocker = '';
    if (this.state.exportOpen) {
      let exText = '';
      exText = this.state.exercises.map(ex => {
        let unit = ex.unit;
        if (ex.num === 1 || ex.num === '1') {
          if (unit === "Minutes") {
            unit = "Minute";
          } else if (unit === "Times") {
            unit = "Time";
          }
        }
        if (ex.num === "N/a" || unit === "N/a") {
          return `${ex.name}\n`;
        }
        if (ex.category === "Break") {
          if (ex.name === "Repeat") {
            return `${ex.name} ${ex.num} ${unit}\n\n`;
          } 
          return `\n${ex.name} ${ex.num} ${unit}\n\n`;
        }
        if (ex.unit === "Reps") {
          return `${ex.name} x${ex.num}\n`
        }
        return `${ex.name} ${ex.num} ${unit} \n`;
      });
      let locText = [];
      if (this.state.location.name !== "Select Location" && this.state.name !== '') {
        locText.push(`${this.state.name}\n\n`);
        locText.push(`Location: \n`);
        locText.push(`${this.state.location.name}\n`);
        locText.push(`${this.state.location.address}\n\n`);
        locText.push(`Workout: \n\n`);
        exText = [...locText, ...exText];
      } else if (this.state.location.name !== "Select Location" && this.state.name === '') {
        locText.push(`Location: \n`);
        locText.push(`${this.state.location.name}\n`);
        locText.push(`${this.state.location.address}\n\n`);
        locText.push(`Workout: \n\n`);
        exText = [...locText, ...exText];
      } else if (this.state.location.name === "Select Location" && this.state.name !== '') {
        locText.push(`${this.state.name}\n\n`);
        exText = [...locText, ...exText];
      }
  
      exText = exText.join('');
      exportCode = 
        <div className="export-window">
          <div className="export-window__header">
            <h2>Export</h2>
          </div>
          <textarea defaultValue={exText} className="export-box" onChange={() => ('')}>
          </textarea>
          <button className="export-close-btn" onClick={this.closeExport}>
            <div className="export-close-btn__text">
              X
            </div>
          </button>
          <button className="export-select-btn" onClick={this.selectText}>
            <div className="btn-text">
              Select
            </div>
          </button>
        </div>;
      exportBlocker =
        <div className="export-blocker" onClick={this.closeExport}></div>;
    }

    let deleteBlocker = '';
    let deleteModal = '';
    if (this.state.deleteOpen) {
      deleteModal = 
        <div className="delete-modal shadow-2">
          <div className="delete-modal__text">
            Are you sure you want to delete this workout?
          </div>
          <button className="delete-modal__btn-yes" onClick={this.deleteWorkout}>
            <div className="btn-text">
              Yes
            </div>
          </button>  
          <button className="delete-modal__btn-no" onClick={this.closeDeleteDialog}>
            <div className="btn-text">
              No
            </div>
          </button>
        </div>
      deleteBlocker = 
        <div className="export-blocker" onClick={this.closeDeleteDialog}></div>;
    }


    return (
      <div className="workout-container">
        <div className="workout-inner-container">
          <input type="text" 
                 placeholder="Name of workout" 
                 id="workout-name-input"
                 className="text-input"
                 value={this.state.name}
                 onChange={(e) => this.setState({ name: e.target.value })} />
          <br />
          <select value={this.state.location.name} onChange={this.handleLocChange} >
            <option key="default" value="Select Location">Select Location</option>
            {locations.map(loc => <option key={loc.name} value={loc.name}>{loc.name}</option>)}
          </select>
          <DragDropContext onDragEnd={this.onDragEnd} >
            <Droppable droppableId="list">
              {provided => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  >
                  {this.state.exercises.map((ex, i) => (
                    <Draggable draggableId={'draggable-' + i} index={i}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={this.getStyle(provided.draggableProps.style, snapshot)}
                            >
                            <WorkoutCard
                              key={i}
                              index={i}
                              exercises={ex}
                              changeUnit={this.changeUnit}
                              changeNum={this.changeNum}
                              clicked={this.clicked}
                              isDragging={snapshot.isDragging}
                              draggingOver={snapshot.draggingOver}
                              />
                          </div>
                        )}
                      </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
            {trashCanCode}
          </DragDropContext>
        </div>
        <div className="workout-summary-container">
          {/*Total Time: {this.state.totalTime} minutes*/}
          <Chart data={this.state} />
          <br />
          {exportButtonCode}
          <br />
          {deleteButtonCode}
        </div>
        {exportCode}
        {exportBlocker}
        {deleteModal}
        {deleteBlocker}
      </div>
    );
  }
}

export default WorkoutContainer;