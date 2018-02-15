import React, {Component} from 'react';

class Saucer extends Component {

  render() {

    const width = this.props.width;
    return (
      <div>
        <h2>The Saucer</h2>
        <ul>
          <li>Width : {width}</li> 
        </ul>
      </div>
    );
  }
}

export default Saucer;
