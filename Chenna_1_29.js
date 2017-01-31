import React, { Component } from 'react';
import './App.css';

class WeatherComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: "Sunny",
        };
    }
    componentWillMount(){
        console.log("inside componentWillMount method");
    }
    componentDidMount(){
        console.log("inside componentDidMount method");
    }
    componentWillReceiveProps(){
        console.log("inside componentWillReceiveProps method");
    }
    shouldComponentUpdate(){
        console.log("inside shouldComponentUpdate method");
        return true;
    }
    componentWillUpdate(){
        console.log("inside componentWillUpdate method");
    }
    componentDidUpdate(){
        console.log("inside componentDidUpdate method");
    }
    componentWillUnmount(){
        console.log("inside componentWillUnmount method");
    }

    changeName() {
        this.setState({weather:"Rainy"})
    }

    render() {
        console.log("inside render method");
        return (
            <div>
                <h1>Today Weather is : {this.state.weather}</h1>
                <button onClick={this.changeName.bind(this)}>
                    Change weather to Rainy
                </button>

            </div>
        );
    }
}

export default WeatherComponent;