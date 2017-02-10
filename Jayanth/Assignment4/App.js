import React, { Component } from 'react';

class App extends Component {
constructor(){
	super();
	this.state = {
		pokemonindex :[]
  }
}
filter(e){
	this.setState({filter:e.target.value})
}
componentWillMount(){
	fetch('http://pokeapi.co/api/v2/pokemon/?format=json').then(response =>response.json())
		.then(({results:pokemonindex})=>this.setState({pokemonindex}))
}
render(){
	let pokemonindex = this.state.pokemonindex
	return (
  <div>
  <h1>Pokémon Directory</h1>
  {pokemonindex.map(item=><Person update={item}/>)}
	</div>
	)
}
}
const Person = (prop) =>
<h4>{prop.update.name}</h4>

export default App;
