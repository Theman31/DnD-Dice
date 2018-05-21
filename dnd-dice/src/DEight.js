import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class DEight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dEightLeadIn: "",
      yourRoll: "",
      dEightResult: ""

    }
  }
  ButtonClicked() {
    let d8Roll = Math.floor(Math.random() * 8 + 1);
    let d8Answer = d8Roll;
    let preEmp;
    if (d8Answer == 8) {
      preEmp = "Hell Yeah!! Nat ";
    }
    else if (d8Answer == 1) {
      preEmp = "Bummer, That's a Nat ";
    }
    else {
      preEmp = "Your D8 rolled ";
    }
    this.setState({
      yourRoll: d8Answer,
      dEightLeadIn: preEmp,
      dEightResult: this.state.dEightLeadIn + this.state.yourRoll
    });
    console.log(d8Answer);
  }

  render() {
    
    return (
      <div>
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll D8</button>
      </div>
    )
  }
}
render(<DEight/>, document.getElementById('DEight'))
