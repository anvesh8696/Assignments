import React, { Component } from 'react';

class App extends Component {
constructor(){
  super();
  this.state = {
    items :[]
  }
}
filter(e){
  this.setState({filter:e.target.value})
}
componentWillMount(){
  fetch('https://swapi.co/api/people/?format=json').then(response =>response.json())
    .then(({results:items})=>this.setState({items}))
}
render(){
  let items = this.state.items
  if(this.state.filter){
    items = items.filter(item=>item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  return (
    <div>
      <input type="text" onChange={this.filter.bind(this)}/>
      {items.map(item=><Person update={item}/>)}
    </div>
  )
}
}

const Person = (prop) =><div> <h4> Films</h4>
                              <span>{prop.update.films}</span> 
                              <h4> Starships</h4>
                              <span>{prop.update.starships}</span> 
                              <h4> Vehicles</h4>
                              <span>{prop.update.vehicles}</span> 
                        </div>

export default App;