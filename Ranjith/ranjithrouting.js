import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import HomeImg from '../Images/ranjith.JPG';

const Home = () => <div>
                      <Links/>
                      <h1>Home</h1>
                      <h2>Ranjith</h2>
                      <img src={HomeImg}/>

                      </div>

const AboutUs = () => <div>
                        <Links/>
                        <h1>Aboutme</h1>
                        <p>Around 6+ years of experience in User Interface development.</p>
                        <div>
                        <p>Here are the client names i worked for</p>
                        <ul>
                        <li><a target="_ blank" href="https://www.charlesschwab.com">charlesschwab</a></li>
                        <li><a target="_ blank" href="https://www.verizon.com">verizon</a></li>
                        <li><a target="_ blank" href="https://www.keybank.com">keybank</a></li>
                        <li><a target="_ blank" href="https://www.qualcomm.com">qualcomm</a></li>
                        </ul>
                        </div>
                        </div>

const Contactus = () => <div>
                        <Links/>
                        <h1>Contactus</h1>
                        <address>

                          <p>ranjith</p>
                          <p>8400 stone brook pkwy apt 638</p>
                          <p>frisco,texas,75034</p>
                          <p>phone:214-216-6075</p>
                          </address>
                        
                        </div>





const Links = () =>
  <nav>
    <Link to="/">Home</Link><br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    <Link to="/AboutUs">AboutUs</Link><br/>
    <Link to="/Contactus">Contactus</Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
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