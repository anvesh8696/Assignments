
import React from 'react';
import styles from './App.css';
import {Router, Route, Link, browserHistory} from 'react-router'


    const Home = () => <div><Links/><h1>Welcome to Home</h1><p>Please explore JobPortals and Help  through navigation</p>
<p><img src="https://cdn3.iconfinder.com/data/icons/abstract-1/512/Welcome-512.png" alt="Welcome"/></p>
</div>
const JobPortals = () => <div><Links/>
<h1></h1>
<div>
                           <p>Please apply on following job portals</p>
                            <ul>
                              <li><a target="_  blank" href="https://www.indeed.com/">Indeed</a></li>
                              <li><a target="_  blank" href="http://www.dice.com/">Dice</a></li>
                                  <li><a target="_  blank" href="http://www.careerbuilder.com/">Career Builder</a></li>
                                  <li><a target="_  blank" href="https://www.monster.com/">Monster</a></li>
                                    <li><a target="_  blank" href="https://www.randstadusa.com/">RandstadUSA</a></li>
                                     <li><a target="_  blank" href="https://www.teksystems.com/">Teksystems</a></li>

                                </ul>
                              </div>
</div>
const Help = () => <div><Links/><h3>Please contact us at +1 444-323-5858</h3></div>

    const Links = () =>
	<nav>
		<span className="Link"><Link to="/">Home</Link></span>
		<span className="Link"><Link to="/JobPortals">Job Portals</Link></span>
		<span className="Link"><Link to="/Help">Help</Link></span>
	</nav>

    const App = () => {
    	return (
    	<Router history={ browserHistory }>
        			<Route path="/" component={Home}></Route>
        			<Route path="/JobPortals" component={JobPortals}></Route>
        			<Route path="/Help" component={Help}></Route>
        		</Router>
        	)
    }
export default App
=======
//import React from 'react';
/*import logo from './logo.svg';
/*import './App.css';*/

/*class App extends Component {
  render() {
    return (
     <div>
         <Header/>
         <Body/>
         <Footer/>
     </div>
      )
    }
 }
   const Header =() => <img src="http://www.w3schools.com/css/trolltunga.jpg" alt="nature"/>
   const Body =() => <h1> Hello World </h1>
   const Footer =() => <p> Reactjs </p>*/

   /* class App extends React.Component{
        render(){
           return <Sample iphone="six"/>
           }
     }

       const Sample =(props)=><h1>{props.iphone}</h1>

        Sample.propTypes={
           iphone(props,propName,Component){
        if(!(propName in props)){
          return new Error(`Missing ${propName}`)
          }
          if((props[propName].length)<6){
            return new Error(`${propName} is too short`)
            }
        }
    }

export default App;*/
//state component

 /*class App extends React.Component {
 	constructor(){
 		super()
 		this.state ={
 			val:0
 		}
 	}
    update(e){
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
 }*/
// export default App;


/*import React from 'react';

class App extends React.Component {
constructor(){
	super();
	this.state = {/
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
const Person = (prop) =>
                        <div>
                           <h4>
                            {prop.update.name}
                            <br/>
                            {prop.update.vehicles}
                            <br/>
                            {prop.update.starships}
                            <br/>
                            {prop.update.films}
                            <br/>
                          </h4>
                        </div>

export default App;*/

import React from 'react';
import styles from './App.css'
import {Router, Route, Link, browserHistory} from 'react-router'

/*class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li>EMAIL US</li>
               <li>ABOUT US</li>
               <li>CONTACT US</li>
               <li>TESTIMONY</li>
            </ul>

           {this.props.children}
         </div>
      )
   }
}*/
const Google = () => <div><Links/><h1>Welcome to Google</h1>
                         <p><a href="https://www.google.com/">Google</a></p>
                         </div>
const Facebook = () => <div><Links/>
<h1></h1>
       <h2>Please Login into Page</h2>
       <p><a href="https://www.Facebook.com/">Facebook</a></p>

</div>

const GMail = () => <div><Links/><h3>Login into GMail</h3>
                        <p><a href="https://www.GMail.com/">GMail</a></p>
                     </div>

const Links = () =>
	<nav>
		<span className="Link"><Link to="/">Google</Link></span>
		<span className="Link"><Link to="/Facebook">Facebook</Link></span>
		<span className="Link"><Link to="/GMail">GMail</Link></span>
	</nav>



const App = () => {
	return (
		<Router history={ browserHistory }>
			<Route path="/" component={Google}></Route>

			<Route path="/Facebook" component={Facebook}></Route>

			<Route path="/GMail" component={GMail}></Route>

		</Router>
	)
}

export default App;


