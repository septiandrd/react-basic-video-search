import React, {Component} from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name : "Septian",
      nim : "1301154164",
      kelas : "IF-39-10"
    }
  }

  handleClick(){
    this.setState({
      name : "Septian Dwi Indradi",
      nim : "1301154346",
      kelas : "IF-39-14"
    })
  }

  render() {
    return (
      <div>
        <p>Nama : {this.state.name}</p>
        <p>NIM : {this.state.nim}</p>
        <p>Kelas : {this.state.kelas}</p>
        <button
          onClick={()=>this.handleClick()}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default App;
