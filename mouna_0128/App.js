
//import ReactDOM from 'react-dom';
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
    console.log(items);
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


class Person extends Component {
    constructor(){
        super();
        this.state = {
            f:[]
        }
    }
    componentWillMount(){
        fetch('http://swapi.co/api/films/?format=json').then(response=>response.json()).then(({results:f})=>this.setState({f}))
    }
    render(){
        let f = this.state.f
        console.log(f);
        return(
            <div>
                <p> {this.props.update.name} </p>
                <p> {this.props.update.films.title} </p>
                <Vehicle/>


            </div>
        )
    }
}

class Vehicle extends Component {
    constructor(){
        super();
        this.state= {
            v:[]
        }
    }
    componentWillMount(){
        fetch('http://swapi.co/api/vehicles/?format=json').then(response=>response.json()).then(({results:f})=>this.setState({f}))
    }
    render(){
        return(
            <div>
                <p> {this.props.update.vehicles}</p>
            </div>
        )
    }
}
export default App;
/*const Person = (prop) => <h4> {prop.update.name} </h4>*/

/*class Person extends Component {
    constructor() {
        super();
        this.state = {
            f: []
        }

    }
    componentWillMount(){
        fetch('http://swapi.co/api/films/?format=json').then(response=>response.json()).then(({results:f})=>this.setState({f}))
    }
    render(){
        let f = this.state.f
        console.log(f);
        return(
            <div>
                <p> {this.props.update.name} </p>


            </div>
        )

    }
}

const Header = (prop)=> <p> {this.prop.count.title} </p>

/*class Film extends Component {
    constructor() {
        super();
        this.state = {
            films: []
        }

    }

    filter(e) {
        this.setState({filter: e.target.value})
    }

    componentWillMount() {
        fetch('http://swapi.co/api/films/?format=json').then(response => response.json()).then(({results:films}) => this.setState({films}))
    }

    render() {
        let films = this.state.films
        return (
            <div>
                {films.map(f => <Header count={f}/>)}

            </div>
        )
    }
}
const Header = (prop) => <p> {prop.count.title}</p>
//const Person = (prop) =><h4>{prop.update.name}</h4>*/
/*class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: []
        }

    }

    filter(e) {
        this.setState({filter: e.target.value})
    }

    componentWillMount() {
        fetch('http://swapi.co/api/films/?format=json').then(response => response.json()).then(({results:films}) => this.setState({films}))
    }

    render() {
        let films = this.state.films
        return (
            <div>
                {films.map(film => <Film count={film}/>)}

            </div>
        )
    }
}
 const Film = (prop) => <p> {prop.count.title}</p>
export default Films;*/

/*class Vehicles extends Component {
    constructor(){
        super();
        this.state = {
            v:[]
        }
    }
    filter(e) {
        this.setState({filter: e.target.value})
    }
componentWillMount(){
        fetch('http://swapi.co/api/vehicles/?format=json').then(response=>response.json()).then(({results:v})=>this.setState({v}))
}
render() {
    let v = this.state.v

    return (
        <div>
            {v.map(veh=><Vehicle main={veh}/>)}
        </div>
    )
}
}

const Vehicle = (prop) => <p> {prop.main.name} </p>
export default Vehicles;*/
/*constructor(){
        super();
        this.state = {
            items :[],
            film:[]
            //starS:[]
        }
    }
    filter(e){
        this.setState({filter:e.target.value})
    }
    componentWillMount(){
        fetch('https://swapi.co/api/people/?format=json').then(response =>response.json())
            .then(({results:items})=>this.setState({items}))
        fetch('http://swapi.co/api/films/?format=json').then(response =>response.json()).then(({result:film})=>this.setState({film}))
    }
    render(){
        let items = this.state.items
        let film  = this.state.film
        console.log(items);
        console.log(film);
        //if(this.state.filter){
            //console.log(this.state.filter);
           // items = items.filter(item=>item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
            //items= items.filter()
            //console.log(items);
        }
        return (
            <div>
               <input type="text" onChange={this.filter.bind(this)}/>
                {items.map(item=><Person update={item}/>)}
                {film.map(film=><Film count={film}/>)}

            </div>
                {item.map(item=><Vehicle num={v}/>
                //{item.map(item=><Star ship={starS}/>

        )
    }
}

const Person = (prop) => <h4>{prop.update.name} <br/> {prop.update.films} <br/> {prop.update.vehicles} <br/> {prop.update.starships} </h4>
const Film = (prop) => <p> {prop.count.title} </p>
/*const Vehicle = (prop) => <p> {prop.num.vehicles}</p>
const Star =(prop)=> <p> {prop.ship.starS}</p>


export default App;*/

//class App extends React.Component {
    /*constructor(){
        super();
        this.state = {
            val:3,
           txt:"click here"
        }
    }
    update(){
          this.setState({val:this.state.val*2})
    }
componentWillMount(){
    console.log("componentWillmount will trigger before render method or before comp is mounted on dom")
}
componentDidMount(){
    console.log('componentDidMount will trigger when the comp is mounted on the dom')
}
componentWillUnmount(){
    console.log("componentWillUnmount will trigger when the comp is removed from the dom")
}
render(){
console.log("render")
    return(
        <div>
            <button onClick={this.update.bind(this)}> {this.state.val} </button>
            <p> {this.state.txt} </p>
        </div>
    )
}
}
class Wrapper extends React.Component {
    mount(){
        ReactDOM.render(<App/>,document.getElementById('qwerty'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('qwerty'))
    }
    render(){
        return(
            <div>
                <button onClick={this.mount.bind(this)}>mount </button>
                <button onClick={this.unmount.bind(this)}> unmount </button>
                <div id="qwerty"> </div>
            </div>
        )
    }
}*/
//export default App;
//export default Wrapper;
// Refs
    /*constructor() {
        super();
        this.state = {
            txt: "Full Name",
            txt1: "Address"
        }
    }

    update() {
        this.setState({
            txt: this.refs.name.value,
            txt1: this.refs.location.value
        })
    }

    render() {
        return (
            <div>
                <input ref="name" type="text" onChange={this.update.bind(this)}/>
                <h1> {this.state.txt}</h1>
                <input ref="location" type="text" onChange={this.update.bind(this)}/>
                <h2> {this.state.txt1} </h2>
            </div>
        )

    }
}
export default App;*/

// Event System
/*constructor() {
        super();
        this.state = {
            txt: "Type here"
        }
    }
    update(e){
        this.setState({txt:e.target.value})
    }

    render() {
    return (
        <div>
            <h2> {this.state.txt}</h2>

            <textarea rows="10" cols="10"
            onClick={this.update.bind(this)}
            onChange={this.update.bind(this)}
            onFocus={this.update.bind(this)}
                      onBlur={this.update.bind(this)}
            onKeyDown={this.update.bind(this)}>
            </textarea>


        </div>
    )}
}
export default App;
// custom propType
   /* render() {
        return <Sample iphone="sixpl"/>
    }
}
const Sample =(props) => <p> {props.iphone} </p>

Sample.propTypes = {
    iphone(props, propName, component){
        if (!(propName in props)) {
            return new Error(`Missing ${propName}`)
        }
        if ((props[propName].length) < 6) {
            return new Error(`${propName} is too short`)
        }
    }
}*/
//props.children
       /*return <Button> I <Heart/> React </Button>
    }
}
const Button = (props) => <button> {props.children} </button>
const Heart = () => <span> &hearts; </span>*/

// App Component
/*<div>
 <Header/>
 <Body/>
 <Footer/>
 </div>
 )
 }
 }
 const Header =()=> <img src="./img/image.jpg" alt="nature"/>
 const Body =()=> <h1> Welcome to React </h1>
 const Footer =()=> <p> A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES </p>*/






