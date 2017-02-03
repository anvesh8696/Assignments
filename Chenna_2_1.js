import React from 'react';
import styles from './App.css';
import {Router, Route, Link, browserHistory} from 'react-router'

const Home = () => <div><Links/><h1>Welcome to Home</h1><p>Please explore about us and contact us through navigation</p></div>
const AboutUs = () => <div><Links/><h1>This app is developed to explore router</h1></div>
const Contactus = () => <div><Links/><h1>Please contact us at +91-9965324746</h1></div>
 
const Links = () =>
	<nav>
		<span className="Link"><Link to="/">Home:</Link></span>
		<span className="Link"><Link to="/AboutUs">About Us</Link></span>
		<span className="Link"><Link to="/Contactus">Contact Us</Link></span>
	</nav>

const App = () => {
	return (
		<Router history={ browserHistory }>
			<Route path="/" component={Home}></Route>
			<Route path="/AboutUs" component={AboutUs}></Route>
			<Route path="/Contactus" component={Contactus}></Route>
		</Router>
	)
}
export default App