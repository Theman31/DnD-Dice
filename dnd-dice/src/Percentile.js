import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class Percentile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadIn: "",
      yourRoll: ""
    }
  }
  ButtonClicked() {
    let d100Roll = Math.floor(Math.random() * 100 + 1);
    let answer = d100Roll;
    let preEmp = "You rolled %";
    this.setState({
      yourRoll: answer,
      leadIn: preEmp
    });
    console.log(answer);
  }

  render() {
    return (
      <div>
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll Percentile Die</button>
      <p>{this.state.leadIn + this.state.yourRoll}</p>
      </div>
    )
  }
}
render(<Percentile/>, document.getElementById('Percentile'))
