/* import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {





    return {
                                    /*  <div className="App">
                                        <div className="App-header">
                                          <img src={logo} className="App-logo" alt="logo" />
                                          <h2>Welcome to React</h2>
                                        </div>
                                        <p className="App-intro">
                                          To get started, edit <code>src/App.js</code> and save to reload.
                                        </p>
                                      </div>
                                        <div>

                                                <Header/>
                                                <Body/>
                                                <Footer/>
                                                <h2>Hello</h2>
                                            </div>
                                    );
                                  }
                                }

                                const Header = () => <img src = "./images/logo1.jpg" alt="header image"/>
                                const Body = () => <p>i am body text</p>
                                const Footer = () => <p>This is Footer Section</p>






                };
               }
              }





export default App; */


 /* import React from 'react';

class App extends React.Component {
    render(){
            return <Sample iphone="six"/>
    }
}

const Sample = (props)=><h1>{props.iphone}</h1>

Sample.propTypes = {
        iphone(props, propName, component){
            if(!(propName in props)){
               return new Error('Missing ${propName}')
            }
            if((props[propName].length)<6){
                    return new Error('${propName} is too short')
            }
        }
}

export default App */

import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
		    state:0
		}
		this.state = {
        	val:0
       	}
	}
	update(e){

                // empty variable that will hold either "Liquid", "Solid", or "Gas"
                        var stateOfMatter;

                        // If temp is on/below freezing, it's a solid
                        if (e.target.value <= 32) {
                            stateOfMatter = 'Solid';

                        // if temp is on/above boiling, it's a gas
                        } else if (e.target.value >= 212) {
                            stateOfMatter = 'Gas';

                        // otherwise it's just a liquid
                        } else {
                            stateOfMatter = 'Liquid';
                        }


		this.setState({state:stateOfMatter})
		this.setVal({val:e.target.value})
	}

	render(){
	//	let txt = this.props.txt
		return (
		<div>
		    <h5>Please enter the temperature in below text box to know the state of water</h5>
			<input type="text" onChange={this.update.bind(this)}/>
			<h1>At {this.state.val} water is considered to be a {this.state.state} state of matter</h1>

// Can you please check why the value is not being updated here.

		</div> )
	}
}

export default App




 /*class Widget extends React.Component {
  render () {
    return (
      <div className="widget">
        <h1 ref="title" className="widget__title">{this.props.title}</h1>
        <div ref="content" className="widget__content">{this.props.content}</div>
      </div>
    )
  }
}

Widget.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.node.isRequired
}

export default Widget; */

