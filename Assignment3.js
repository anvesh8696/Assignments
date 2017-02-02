import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
		    water:0,
		    val:0
		}
	this.state = {
        	val:0
       	}
	}
	update(e){

                // empty variable that will hold either "Liquid", "Solid", or "Gas"
                        var stateOfMatter;
                        var x = e.target.value;
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


		this.setState({water:stateOfMatter})
		this.setVal({val:x})
	}

	render(){
	//	let txt = this.props.txt
		return (
		<div>
		    <h5>Please enter the temperature in below text box to know the state of water</h5>
			<input type="text" onChange={this.update.bind(this)}/>
			<h1>At {this.state.val} water is considered to be a {this.state.water} state of matter</h1>
     // Can you please check why the value is not being updated here.

		</div> );
	}
}


export default App