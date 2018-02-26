import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class DEight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadIn: "",
      yourRoll: ""
    }
  }
  ButtonClicked() {
    let d8Roll = Math.floor(Math.random() * 8 + 1);
    let answer = d8Roll;
    let preEmp = "Your D8 rolled ";
    this.setState({
      yourRoll: answer,
      leadIn: preEmp
    });
    console.log(answer);
  }

  render() {
    return (
      <div>
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll D8</button>
      <p>{this.state.leadIn + this.state.yourRoll}</p>
      </div>
    )
  }
}
render(<DEight/>, document.getElementById('DEight'))
