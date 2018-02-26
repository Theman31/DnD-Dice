import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class DSix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadIn: "",
      yourRoll: ""
    }
  }
  ButtonClicked() {
    let d6Roll = Math.floor(Math.random() * 6 + 1);
    let answer = d6Roll;
    let preEmp;
    if (answer == 6) {
      preEmp = "Hell Yeah!! Nat ";
    }
    else if (answer == 1) {
      preEmp = "Bummer, That's a Nat ";
    }
    else {
      preEmp = "Your D6 rolled ";
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
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll D6</button>
      <p>{this.state.leadIn + this.state.yourRoll}</p>
      </div>
    )
  }
}
render(<DSix/>, document.getElementById('DSix'))
