import react from 'react';
import reactDOM from 'react-dom';
import dtwenty from './dtwenty.js';
import DEight from './DEight.js';
import DTwelve from './DTwelve.js';
import DTen from './DTen.js';
import DSix from './DSix.js';
import DFour from './DFour.js';
import Percentile from './Percentile.js';
import StatBlock from './StatBlock.js';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dFourResult: 0,
      dSixResult: 0,
      dEightResult: 0,
      dTenResult: 0,
      dTwelveResult: 0,
      dTwentyResult: 0,
      percentileResult: 0,
      didRoll: false,
      statBlock: []
    }
  }

}
render(<Answer/>, document.getElementById('Answer') )
