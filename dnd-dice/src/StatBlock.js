import React, {Component} from 'react';
import reactDOM, {render} from 'react-dom';

class StatBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadIn: [],
      yourRoll: []
    }
  }
  ButtonClicked() {
  let block = [];
  let rolls = [];
  let oneStat = 0;
  let statTotal;

  const statGenerator = function(){
    let d6Roll1 = Math.floor(Math.random() * 6 + 1);
    let d6Roll2 = Math.floor(Math.random() * 6 + 1);
    let d6Roll3 = Math.floor(Math.random() * 6 + 1);
    let d6Roll4 = Math.floor(Math.random() * 6 + 1);
    rolls = [d6Roll1, d6Roll2, d6Roll3, d6Roll4];
    console.log("4 Rolls", rolls);
    let dropLowest = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 1){
          arr.splice(i, 1)
          return arr;
          break;
        }
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 2){
          arr.splice(i, 1)
          return arr;
          break;
        }
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 3){
          arr.splice(i, 1)
          return arr;
          break;
        }
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 4){
          arr.splice(i, 1)
          return arr;
          break;
        }
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 5){
          arr.splice(i, 1)
          return arr;
          break;
        }
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 6){
          arr.splice(i, 1)
          return arr;
          break;
        }
      }
    }
    statTotal = dropLowest(rolls);
    oneStat = statTotal.reduce((total, roll) => {
      return  total + roll
    })
  }
  while (block.length < 6) {
    statGenerator()
      block.push(oneStat);
  };
    console.log("3 Rolls", statTotal);
    console.log("the stat total",oneStat);
    console.log("statblock", block);
    this.setState({
      yourRoll: block,
      leadIn: "STR, DEX, CON, INT, WIS, CHA ",
    });
  }

  render() {
    return (
      <div>
      <button className= 'inputs' onClick = {this.ButtonClicked.bind(this)}>Roll StatBlock</button>
      <p>{this.state.leadIn}</p>
      <p>{this.state.yourRoll}</p>
      </div>
    )
  }
}
render(<StatBlock/>, document.getElementById("StatBlock"))
