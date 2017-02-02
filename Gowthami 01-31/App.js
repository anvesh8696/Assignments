
import React from 'react';
//import ReactDOM from 'react-dom';


//statefull component
/*
class App extends React.Component {

  render(){
      return (
          <div>
              <Header/>
              <Body/>
              <Footer/>
              </div>
      )

    }
  }
const Header  = () => <p>Smiley<img src="http://www.w3schools.com/tags/smiley.gif" alt="Hello" width="52" height="52"/></p>
const Body  = () => <p>Welcome to React<img src="https://i.ytimg.com/vi/FrCgZZXXK9I/hqdefault.jpg" alt="Logo" width="80" height="80"/></p>
const Footer  = () => <p><img src="http://i564.photobucket.com/albums/ss86/ban0107/aya/footer.gif" alt="GoodBye"/> </p>

*/
/*
class App extends React.Component {
    render(){
        return <Button>I <Heart/>React</Button>
    }
}
//let {props.children} = response.data;
const Button = (props) =><button>{props.children}</button>

const Heart = () => <span>&hearts;</span>*/

/*class App extends React.Component {
    render(){
        return <Sample name="GG"/>
    }
}
class State extends App {
    constructor(){
        super()
        this.state ={
            val:0
        }
    }
    update(){
        this.setState({val:this.state.val+1})
    }

    render(){
        console.log("render")
        return (
            <div>
            <button onClick={this.update.bind(this)}>{this.state.val}</button>
        </div>
    )
    }
}

const Sample =(props)=> <h1>{props.name}</h1>

Sample.propTypes = {
    name(props,propName,Component){
        if(!(propName in props)){
            return new Error(`Missing ${propName}`)
        }
        if((props[propName].length)<6){
            return new Error(`${propName} is too short`)
        }
    }
}*/
class App extends React.Component {
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
           Sort By Character: <input type="text" onChange={this.filter.bind(this)}/>
        {items.map(item=><Person update={item}/>)}
    </div>
    )
    }
}

const Person = (prop) =><div class="view"> <h4> Name:{prop.update.name} <br/>
                             Vehicles:{prop.update.vehicles}<br/>
                             Starships: {prop.update.starships}<br/>
                             Films: {prop.update.films}<br/>
                             Species:{prop.update.species} </h4> </div>


export default App;



