import React from 'react';
const styles = {
    anchorStyle: {
        display: 'inline-block',
        color: 'green',
    },
};
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            items :[],
            filter: '',
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
            {items.map(item=> {return(
            <div>
                <PersonFilms update={item}/>
                <PersonVehicles update={item}/>
                <PersonStarships update={item}/>
            </div>
            )}
            )}
        </div>
        )
    }
}
const PersonFilms = (prop) => { return (<p><h3>Name: {prop.update.name}</h3> Films: {prop.update.films.map(item => <AnchorTag item={item} />)}</p>);}
const PersonVehicles = (prop) => { return (<p>Vehicles: {prop.update.vehicles.map(item => <AnchorTag item={item} />)}</p>);}
const PersonStarships = (prop) => { return (<p>Starships: {prop.update.starships.map(item => <AnchorTag item={item} />)}</p>);}

const AnchorTag = (prop) => {return( <p> <a href={prop.item} style={styles.anchorStyle}> {prop.item} </a> {',  '}</p>);}



export default App;

