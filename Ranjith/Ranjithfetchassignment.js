 import React, { Component } from 'react';

class App extends Component {
constructor(){
  super();
  this.state = {
    items :[]
  }
}

componentWillMount(){
  fetch('https://swapi.co/api/people/?format=json').then(response =>response.json())
    .then(({results:items})=>this.setState({items}))
}
render(){
  let items = this.state.items

  return (
    <div>
      <h3>Vehicles</h3>
      {items.map(item=><Vehicles update={item}/>)}
      <br/><h3>StarShips</h3>
      {items.map(item=><StarShips update={item}/>)}
      <br/><h3>Films</h3>
      {items.map(item=><Films update={item}/>)}
    </div>
  )
}
}

const Films = (prop) =><div><h4>{prop.update.films}</h4></div>
const Vehicles = (prop) =><div><h4>{prop.update.vehicles}</h4></div>
const StarShips = (prop) =><div><h4>{prop.update.starships}</h4></div>

export default App;
