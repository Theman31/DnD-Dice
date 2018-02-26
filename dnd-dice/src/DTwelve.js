import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class DTwelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadIn: "",
      yourRoll: ""
    }
  }
  ButtonClicked() {
    let d12Roll = Math.floor(Math.random() * 12 + 1);
    let answer = d12Roll;
    let preEmp = "Your D12 rolled ";
    this.setState({
      yourRoll: answer,
      leadIn: preEmp
    });
    console.log(answer);
  }

  render() {
    return (
      <div>
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll D12</button>
      <p>{this.state.leadIn + this.state.yourRoll}</p>
      </div>
    )
  }
}
render(<DTwelve/>, document.getElementById('DTwelve'))
