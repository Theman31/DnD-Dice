import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class DFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadIn: "",
      yourRoll: ""
    }
  }
  ButtonClicked() {
    let d4Roll = Math.floor(Math.random() * 4 + 1);
    let answer = d4Roll;
    let preEmp = "Your D4 rolled ";
    this.setState({
      yourRoll: answer,
      leadIn: preEmp
    });
    console.log(answer);
  }

  render() {
    return (
      <div>
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll D4</button>
      <p>{this.state.leadIn + this.state.yourRoll}</p>
      </div>
    )
  }
}
render(<DFour/>, document.getElementById('DFour'))
