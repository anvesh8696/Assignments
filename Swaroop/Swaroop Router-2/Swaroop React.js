import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import './App.css'
const Home = () => <div className="compDiv">
                      <Links/>
											<div className="bodyStyle">
											<nav>
												<span className="links"><Link to="/">home</Link></span>
												<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
												<span className="links"><Link to="/contactus">Contactus</Link></span>
                        <span className="links"><Link to="/Fun">Fun</Link></span>
											</nav>
                      <h1 className="headerPart">Home</h1>
                      <h2><strong>Swaroop Reddy Vudumula Welcomes You!!</strong></h2>

                        <div className="bodyStyle3">
                      <p>If I quit now, I will soon be back to where I started. And when I started I was desperately wishing to be where I am now.</p>
                      <p>You have power over your mind, not outside events. Realize this, and you will find strength.</p>
                      <p>You are never too old to set another goal or to dream a new dream.</p>
                      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
											</div>
                      </div>
                   </div>
const AboutUs = () => <div className="compDiv">
                        <Links/>
                        <div className="bodyStyle">
												<nav>
													<span className="links"><Link to="/">home</Link></span>
													<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
													<span className="links"><Link to="/contactus">Contactus</Link></span>
                          <span className="links"><Link to="/Fun">Fun</Link></span>
												</nav>
                          <h1 className="headerPart">AboutMe</h1>
                          <p>Around 6yrs experiance in UI and JAVA.</p>
                          <div className="bodyStyle2" >
                            <p>MY Projects Details </p>
														<div>
												    <table>
												        <thead>
																<tr>
																<th>Project Name</th>
																<th>FROM-TO</th>
																<th>Framework and Scripting</th>
																<th>Brief Details</th>
																</tr>
																 </thead>
																 <tbody>
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
												     </tbody>
														 </table>
                             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

													</div>
                          </div>
                        </div>
                      </div>
const Contactus = () => <div className="compDiv">
                            <Links/>
                            <div className="bodyStyle">
														<nav>
															<span className="links"><Link to="/">home</Link></span>
															<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
															<span className="links"><Link to="/contactus">Contactus</Link></span>
                              <span className="links"><Link to="/Fun">Fun</Link></span>
														</nav>
                              <h1 className="headerPart">Contact Details</h1>
                              <address>
                                <h3>Swaroop Reddy Vudumula</h3>
                                <h3>email:swaroop.vudumula@gmail.com</h3>
                                <h3>phone:414-909-1929</h3>
                              </address>
                              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                          </div>
                        </div>
                        const Fun = () => <div className="Reactjs">
                                                    <Links/>
                                                    <div className="bodyStyle">
                        														<nav>
                        															<span className="links"><Link to="/">home</Link></span>
                        															<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
                        															<span className="links"><Link to="/contactus">Contactus</Link></span>
                                                      <span className="links"><Link to="/Fun">Fun</Link></span>
                                                      </nav>
                                                      <h1 className="headerPart">Fun Time</h1>                                                      <nav>
                                                      <span className="links"><Link to="/Fun/movies">Movies</Link></span>
                                                      <span className="links"><Link to="/Fun/travel">Travel</Link></span>
                                                      <span className="links"><Link to="/Fun/event">Event</Link></span>
                                                      <span className="links"><Link to="/Fun/education">Education</Link></span>
                                                      </nav>
                                                      <img src='http://cdn.hdpicswale.in/assets/upload/telugu/mahesh-babu-384/mahesh-babu-body-photos-9988.jpeg' alt="mypic"/>

                                                </div>

                                                </div>
                                                const movies = () => <div className="movies">
                                                                            <Links/>
                                                                            <div className="bodyStyle">
                                                														<nav>
                                                															<span className="links"><Link to="/">home</Link></span>
                                                															<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
                                                															<span className="links"><Link to="/contactus">Contactus</Link></span>
                                                                              <span className="links"><Link to="/Fun">Fun</Link></span>
                                                                              </nav>
                                                                              <h1 className="headerPart">Fun Time</h1>

                                                                              <nav>
                                                                              <span className="links"><Link to="/Fun/movies">Movies</Link></span>
                                                                              <span className="links"><Link to="/Fun/travel">Travel</Link></span>
                                                                              <span className="links"><Link to="/Fun/event">Event</Link></span>
                                                                              <span className="links"><Link to="/Fun/education">Education</Link></span>
                                                                              </nav>
                                                                              <h1 className="headerPart">Movies</h1>
                                                                            <a href="https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C1CHBF_enUS729US729&ion=1&espv=2&ie=UTF-8#q=the+lego+batman+movie&stick=H4sIAAAAAAAAAOPgVeLVT9c3NEw2MjNJNygz2MDIuIuJyy0zJzckMzk7tQQAN29xryEAAAA" target="_blank">  <img src='http://wallpapersdsc.net/wp-content/uploads/2015/12/12150.jpg' alt="mypic"/></a>

                                                                        </div>

                                                                        </div>
                                                                        const travel = () => <div className="travel">
                                                                                                    <Links/>
                                                                                                    <div className="bodyStyle">
                                                                        														<nav>
                                                                        															<span className="links"><Link to="/">home</Link></span>
                                                                        															<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
                                                                        															<span className="links"><Link to="/contactus">Contactus</Link></span>
                                                                                                      <span className="links"><Link to="/Fun">Fun</Link></span>
                                                                                                      </nav>
                                                                                                      <h1 className="headerPart">Fun Time</h1>

                                                                                                      <nav>
                                                                                                      <span className="links"><Link to="/Fun/movies">Movies</Link></span>
                                                                                                      <span className="links"><Link to="/Fun/travel">Travel</Link></span>
                                                                                                      <span className="links"><Link to="/Fun/event">Event</Link></span>
                                                                                                      <span className="links"><Link to="/Fun/education">Education</Link></span>
                                                                                                      </nav>
                                                                                                      <h1 className="headerPart">Travel</h1>
                                                                                                    <a href="https://www.google.com/flights/#search;f=DFW,DAL;t=CDG,ORY,BVA,XHP,XPG;d=2017-02-22;r=2017-02-26;q=flight" target="_blank">   <img src='http://cutewallpaper.org/wp-content/uploads/2016/08/4k-wallpaper-1.jpg' alt="mypic"/></a>

                                                                                                </div>

                                                                                                </div>
                                                                                                const event = () => <div className="event">
                                                                                                                            <Links/>
                                                                                                                            <div className="bodyStyle">
                                                                                                														<nav>
                                                                                                															<span className="links"><Link to="/">home</Link></span>
                                                                                                															<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
                                                                                                															<span className="links"><Link to="/contactus">Contactus</Link></span>
                                                                                                                              <span className="links"><Link to="/Fun">Fun</Link></span>
                                                                                                                              </nav>
                                                                                                                              <h1 className="headerPart">Fun Time</h1>

                                                                                                                              <nav>
                                                                                                                              <span className="links"><Link to="/Fun/movies">Movies</Link></span>
                                                                                                                              <span className="links"><Link to="/Fun/travel">Travel</Link></span>
                                                                                                                              <span className="links"><Link to="/Fun/event">Event</Link></span>
                                                                                                                              <span className="links"><Link to="/Fun/education">Education</Link></span>
                                                                                                                              </nav>
                                                                                                                              <h1 className="headerPart">Events</h1>
                                                                                                                            <a href="https://www.eventbrite.com/d/tx--plano/events/?mode=search" target="_blank">   <img src='https://4.bp.blogspot.com/-k8IX2Mkf0Jo/U4ze2gNn7CI/AAAAAAAA7xg/iKxa6bYITDs/s0/HOT+Balloon+Trip_Ultra+HD.jpg' alt="mypic"/></a>

                                                                                                                        </div>

                                                                                                                        </div>
                                                                                                                        const education = () => <div className="education">
                                                                                                                                                    <Links/>
                                                                                                                                                    <div className="bodyStyle">
                                                                                                                        														<nav>
                                                                                                                        															<span className="links"><Link to="/">home</Link></span>
                                                                                                                        															<span className="links"><Link to="/aboutUs">AboutUs</Link></span>
                                                                                                                        															<span className="links"><Link to="/contactus">Contactus</Link></span>
                                                                                                                                                      <span className="links"><Link to="/Fun">Fun</Link></span>
                                                                                                                                                      </nav>
                                                                                                                                                      <h1 className="headerPart">Fun Time</h1>

                                                                                                                                                      <nav>
                                                                                                                                                      <span className="links"><Link to="/Fun/movies">Movies</Link></span>
                                                                                                                                                      <span className="links"><Link to="/Fun/travel">Travel</Link></span>
                                                                                                                                                      <span className="links"><Link to="/Fun/event">Event</Link></span>
                                                                                                                                                      <span className="links"><Link to="/Fun/education">Education</Link></span>
                                                                                                                                                      </nav>
                                                                                                                                                      <h1 className="headerPart">Education</h1>
                                                                                                                                                  <a href="https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b" target="_blank">    <img src='https://wallpaperscraft.com/image/office_desks_computers_style_modern_39302_3840x2160.jpg' alt="mypic"/> </a>

                                                                                                                                                </div>

                                                                                                                                                </div>

const Links = () =>
	<nav  className="bodyStyle">
		<span className="links"><Link to="/"></Link></span>
		<span className="links"><Link to="/aboutUs"></Link></span>
		<span className="links"><Link to="/contactus"></Link></span>
    <span className="links"><Link to="/Fun"></Link></span>
    <span className="links"><Link to="/Fun/movies"></Link></span>
    <span className="links"><Link to="/Fun/travel"></Link></span>
    <span className="links"><Link to="/Fun/event"></Link></span>
    <span className="links"><Link to="/Fun/education"></Link></span>


	</nav>
const App = () => {
	return (
		<Router history={ browserHistory }>
			<Route path="/" component={Home}></Route>
			<Route path="/AboutUs" components={AboutUs}></Route>
			<Route path="/Contactus" components={Contactus}></Route>
      <Route path="/Fun" components={Fun}></Route>
      <Route path="/Fun/movies" components={movies}></Route>
      <Route path="/Fun/travel" components={travel}></Route>
      <Route path="/Fun/event" components={event}></Route>
      <Route path="/Fun/education" components={education}></Route>

		</Router>
	)
}
export default App
