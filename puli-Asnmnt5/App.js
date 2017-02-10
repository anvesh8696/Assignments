import React from 'react';
import styles from './App.css'
import {Router, Route, Link, browserHistory} from 'react-router'
import HomeImg from '../images/tiger.jpg';

const Home = () => <div className="compDiv">
                      <Links/>
                      <h1 className="headerPart">Home</h1>
                      <h2><strong>Sandeep Kumar Puli Welcomes You!!</strong></h2>
                      <img src={HomeImg}/>

                   </div>
const AboutUs = () => <div className="compDiv">
                        <Links/>
                        <div className="bodyStyle">
                          <h1 className="headerPart">AboutMe</h1>
                          <p>Have been working as Front-End developer since 6 years 'dated 2/2/17'.</p>
                          <div>
                            <p>Here are the  projects links i worked for</p>
                            <ul>
                              <li><a target="_  blank" href="https://www.google.com">gooogle maps</a></li>
                              <li><a target="_  blank" href="https://www.facebook.com">facebook</a></li>
                              <li><a target="_  blank" href="https://www.walmart.com/">wallmart</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
const Contactus = () => <div className="compDiv">
                            <Links/>
                            <div className="bodyStyle">
                              <h1 className="headerPart">Contact Details</h1>
                              <address>
                                <p>Sandeep Kumar Puli</p>
                                <p>email:sandeepsanaka@gmail.com</p>
                                <p>phone:2564689602</p>
                              </address>
                            </div>
                        </div>

const Links = () =>
	<nav>
		<span className="links"><Link to="/">home</Link></span>
		<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
		<span className="links"><Link to="/contactus">Contactus</Link></span>
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
