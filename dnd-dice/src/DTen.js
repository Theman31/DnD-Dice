import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class DTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadIn: "",
      yourRoll: ""
    }
  }
  ButtonClicked() {
    let d10Roll = Math.floor(Math.random() * 10 + 1);
    let answer = d10Roll;
    let preEmp;
    if (answer == 10) {
      preEmp = "Hell Yeah!! Nat ";
    }
    else if (answer == 1) {
      preEmp = "Bummer, That's a Nat ";
    }
    else {
      preEmp = "Your D10 rolled ";
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
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll D10</button>
      <p>{this.state.leadIn + this.state.yourRoll}</p>
      </div>
    )
  }
}
render(<DTen/>, document.getElementById('DTen'))
