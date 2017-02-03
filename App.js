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
