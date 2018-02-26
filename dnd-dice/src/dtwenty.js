import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class DTwenty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadIn: "",
      yourRoll: ""
    }
  }
  ButtonClicked() {
    let d20Roll = Math.floor(Math.random() * 20 + 1);
    let answer = d20Roll;
    let preEmp;
    if (answer == 20) {
      preEmp = "Hell Yeah!! Nat ";
    }
    else if (answer == 1) {
      preEmp = "Bummer, That's a Nat ";
    }
    else {
      preEmp = "Your D20 rolled ";
    }
    this.setState({
      yourRoll: answer,
      leadIn: preEmp
    });
    console.log(answer);
  }

  render() {
    return (
      <div>
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll D20</button>
      <p>{this.state.leadIn + this.state.yourRoll}</p>
      </div>
    )
  }
}
render(<DTwenty/>, document.getElementById('DTwenty'))
