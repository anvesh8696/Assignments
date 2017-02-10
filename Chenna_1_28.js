import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <Button> <Click/> Dollar</Button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Click extends Component {
  render(){
    return <span>&#36;</span>
  }
}

export default App;