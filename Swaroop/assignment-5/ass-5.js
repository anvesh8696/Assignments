import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import './App.css';
const Home = () => <div className="compDiv">
                      <Links/>
											<div className="bodyStyle">
                      <h1 className="headerPart">Home</h1>
                      <h2><strong>Swaroop Reddy Vudumula Welcomes You!!</strong></h2>
                      <img src='https://4.bp.blogspot.com/-ke1gxRPCjkw/VF8ECeG3q1I/AAAAAAABVDA/Gys0pALCZNc/s0/Dodge%2BViper%2BGTS%2BUHD.jpg' alt="mypic"/>
											</div>
                   </div>
const AboutUs = () => <div className="compDiv">
                        <Links/>
                        <div className="bodyStyle">
                          <h1 className="headerPart">AboutMe</h1>
                          <p>Around 6yrs experiance in UI and JAVA.</p>
                          <div>
                            <p>MY Projects Details </p>
														<div>
												    <table>
												        <thead>
												          <tr>

												      <h3>Project 1</h3>
															<td>JUNE-10 TO NOV-13</td>
															<td>Angularjs, HTML,CSS</td>
															<td><li><a target="_  blank" href="https://wallpaperscraft.com/image/child_angel_cupid_arrows_69889_3840x2160.jpg">Brief Details</a></li></td>
																</tr>

															<tr>

												      <h3>project 2</h3>
															<td>DEC-13 TO JUNE-15 </td>
															<td>Angularjs, HTML5,CSS3</td>
															<td><li><a target="_  blank" href="https://www.apple.com">Brief Details</a></li></td>
															</tr>

															<tr>

												      <h3>project 3</h3>
															<td>JULY-15 PRESENT </td>
															<td>Reactjs,HTML5,CSS3</td>
															<td><li><a target="_  blank" href="https://wallpaperscraft.com/image/face_paint_profile_abstraction_95073_3840x2400.jpg">Brief Details</a></li></td>
												      </tr>
												       </thead>

												     </table>
														 <img src='https://wallpaperscraft.com/image/face_paint_profile_abstraction_95073_3840x2400.jpg' alt="mypic"/>

														</div>

                          </div>
                        </div>
                      </div>
const Contactus = () => <div className="compDiv">
                            <Links/>
                            <div className="bodyStyle">
                              <h1 className="headerPart">Contact Details</h1>
                              <address>
                                <p>Swaroop Reddy Vudumula</p>
                                <p>email:swaroop.vudumula@gmail.com</p>
                                <p>phone:414-909-1929</p>
                              </address>
															<img src='https://wallpaperscraft.com/image/child_angel_cupid_arrows_69889_3840x2160.jpg' alt="mypic"/>

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
