import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {

  render() {

    const numCardio = this.props.data.numCardio;
    const numLegs = this.props.data.numLegs;
    const numCore = this.props.data.numCore;
    const numBack = this.props.data.numBack;
    const numChest = this.props.data.numChest;

    let colors = {
      red: '#E1413C',
      blue: '#0598EC',
      yellow: '#F8B23D',
      green: '#009D60',
      purple: '#762182',
      gray: '#515969',
      tealBlue: '#005F78'
    }

    let MAX_LENGTH = Math.max(numCardio, numLegs, numCore, numBack, numChest) + 2;
    if (!MAX_LENGTH) {
      MAX_LENGTH = 5;
    }

    const barColors = [colors.red, colors.purple, colors.tealBlue, colors.yellow, colors.green];

    const data = {
      labels: ['Cardio', 'Legs', 'Core', 'Back', 'Chest'],
      datasets: [
        {
          label: 'Exercises',
          borderWidth: 1,
          hoverBackgroundColor: 'rgb(70,130,180)',
          hoverBorderColor: 'rgb(70,130,180)',
          data: [numCardio, numLegs, numCore, numBack, numChest],
          borderColor: barColors, //styles.colorsSources.blue, //'#EC932F',
          backgroundColor: barColors, //styles.colorsSources.blue, //'#EC932F',
          pointBorderColor: barColors, //styles.colorsSources.blue, //'#EC932F',
          pointBackgroundColor: barColors, //styles.colorsSources.blue, //'#EC932F',
          pointHoverBackgroundColor: barColors, //styles.colorsSources.blue, //'#EC932F',
          pointHoverBorderColor: barColors, //styles.colorsSources.blue, //'#EC932F',
        }
      ]
    }

    const options = {
      legend : {
        display: false
      },
      scales: {      
        yAxes: [
          {
            label: 'Number',
            /*scaleLabel: {
              display: true,
              labelString: 'Number',
              fontColor: '#333',
              fontSize: 16, 
            },*/
            type: 'linear',
            display: true,
            position: 'left',
            //id: 'y-axis-1',
            gridLines: {
              display: true,
              //color: '#DDD',
            },
            labels: {
              show: true
            },
            ticks: {
              beginAtZero:true,
              min: 0,
              max: MAX_LENGTH,
              stepSize: 1, 
              //fontColor: '#DDD',
              //fontSize: 16,   
            },
          }
        ]
      }
    };

    return (
      <div className="chart-container">
        <Bar 
            data={data} options={options}
             />
      </div>
    );
  }
}

export default Chart;
