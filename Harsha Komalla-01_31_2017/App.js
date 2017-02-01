import React from 'react';


class App extends React.Component{
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
            {items.map(item=><PersonFilms update={item}/>)}
            {items.map(item=><PersonVehicles update={item}/>)}
            {items.map(item=><PersonStarships update={item}/>)}
        </div>
        )
    }
}
const PersonFilms = (prop) =><h5>Films of {prop.update.name} are : {prop.update.films}</h5>
const PersonVehicles = (prop) =><h5>Vehicles of {prop.update.name} are : {prop.update.vehicles}</h5>
const PersonStarships = (prop) =><h5>Starships of {prop.update.name} are : {prop.update.starships}</h5>



export default App;