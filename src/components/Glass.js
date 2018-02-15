import React, {Component} from 'react';

class Glass extends Component {

  render() {


    return (
      <div>
        <h2>The Glass</h2>
        <ul style={{color:this.props.color}}>
          <li>Color : {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

export default Glass;
