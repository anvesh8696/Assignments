import React, { Component } from 'react';
  import './App.css';
  class App extends Component {
    constructor(){
      super();
        this.state={
          square:'I am a square',
          circle:'I am a circle',
          triangle:'I am a triangle'
        }
    }
    render() {
      return (
        <div>
          <Square squareProp={this.state.square}/><br/>
          <Circle circleProp={this.state.circle}/><br/>
          <Triangle triangleProp={this.state.triangle}/>
        </div>
      );
    }
  }
  class Triangle extends Component {
    render() {
      return (
        <div>
          <br/>
          <p>{this.props.triangleProp}</p>
        </div>
      )
    }
  }
  class Square extends Component {
    render() {
      return (
        <div>
          <br/>
          <p>{this.props.squareProp}</p>
        </div>
      )
    }
  }
  class Circle extends Component {
    render() {
      return (
        <div>
          <p>{this.props.circleProp}</p>
          <p>{this.props.defProp}</p>
        </div>
      )
    }
  }
  Component.defaultProps={defProp:'I am a default Prop'}
  export default App;
