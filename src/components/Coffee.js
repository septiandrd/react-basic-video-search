import React, {Component} from 'react';

class Coffee extends Component {

  render() {
    const {bean,type,waterVolume} = this.props;

    return (
      <div>
        <h2>The Coffee</h2>
        <ul>
          <li>Bean : {bean}</li>
          <li>Type : {type}</li>
          <li>Volume : {waterVolume}</li>
        </ul>
      </div>
    );
  }
}

export default Coffee;
