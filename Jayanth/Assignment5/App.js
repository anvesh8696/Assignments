import './App.css';
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

const Home = () => <div>
<div className="page-header" className="text-center">
    <h1 className="text-info">Travelx <small>Travel Companion</small></h1>
</div>
<Links/>
<div className="container">
	<p className="h4">
	A vacation is something you want to make sure you’re paying
	for exactly what you get, and that means booking through a website you trust.
	There are many standout companies, especially Travelx with perks like secret deals,
	a smooth booking process, and discounts on places like vacation rentals and hostels.
</p>
	<br/>
	<img src="https://s-media-cache-ak0.pinimg.com/originals/af/a7/24/afa724205186256075938ab1fc0eefde.jpg" height="780"/>
</div></div>

const Plan = () =>
<div>
	<div className="page-header" className="text-center">
	    <h1 className="text-info">Travelx <small>Travel Companion</small></h1>
	</div>
	<Links/>

<div className="row top-buffer" className="col-md-">
<div className="col-md-4 ">
<form className="form-horizontal">
 <div className="form-group">
		 <label for="inputEmail" className=" col-md-3">Source</label>
		 <div className="col-xs-10 " >
				 <input type="email" className="form-control" id="inputEmail " placeholder="Source"/>
		 </div>
 </div>
 <div className="form-group">
		 <label for="inputPassword" className="control-label " className=" col-md-3">Destination</label>
		 <div className="col-md-10">
				 <input type="email" className="form-control" id="inputPassword" placeholder="Destination"/>
		 </div>
 </div>
 <div className="form-group">
		 <div className="col-xs-offset-4">
				 <button type="submit" className="btn btn-primary">Go!</button>
		 </div>
 </div>
</form>
</div>
</div>
<div className="col-md-3" className="col-xs-offset-3">
	<iframe src="//www.google.com/maps/embed/v1/place?q=silveradoapartments,%20US&zoom=17&key=AIzaSyDLXf2SckBvF3gHxxbp9jrLdvqMKT9Bf9w" width="800" height="500">
	</iframe>
</div>
</div>

// Harrods,Brompton%20Rd,%20UK&zoom=17
const Places = (props) =>
<div>
	<div className="page-header" className="text-center">
			<h1 className="text-info">Travelx <small>Travel Companion</small></h1>
	</div>
	<Links/>
<div className="container">
<Links1/>
	<Router history={ browserHistory }>
		<Route path="/Places/SanFrancisco" component={SanFrancisco}></Route>
		<Route path="/Places/Tokyo" component={Tokyo}></Route>
		<Route path="/Places/London" component={London}></Route>
	</Router>


</div>

</div>

const Login = () =>
<div className="row top-buffer">
<div className="page-header" className="text-center">
		<h1 className="text-info">Travelx <small>Travel Companion</small></h1>
</div>
<Links/>
<div className="col-md-3 col-md-offset-5">
<form className="form-horizontal">
 <div className="form-group">
		 <label for="inputEmail" className="control-label col-xs-3">Email</label>
		 <div className="col-md-8" >
				 <input type="email" className="form-control" id="inputEmail " placeholder="Email"/>
		 </div>
 </div>
 <div className="form-group">
		 <label for="inputPassword" className="control-label col-xs-3">Password</label>
		 <div className="col-md-8">
				 <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
		 </div>
 </div>
 <div className="form-group">
		 <div className="col-xs-offset-2 col-xs-8">
				 <div className="checkbox">
						 <label><input type="checkbox"/> Remember me</label>
				 </div>
		 </div>
 </div>
 <div className="form-group">
		 <div className="col-xs-offset-3 col-xs-8">
				 <button type="submit" className="btn btn-primary">Login</button>
		 </div>
 </div>
</form>
</div>
</div>

const SanFrancisco = () =>
<div>
<div className="navbar">
	<h1 className="h1" className="text-info">San Francisco</h1>
</div>
<div>
	Perched atop hills and filled-in marshland at the entrance to one of the Pacific’s largest natural harbors,
	San Francisco has had an outsized influence on the history of California and the United States.
	Originally a Spanish (later Mexican) mission and pueblo, it was conquered by the United States in 1846
	and by an invading army of prospectors following the 1848 discovery of gold in its hinterland. The Gold Rush
	made San Francisco a cosmopolitan metropolis with a frontier edge. The great 1906 earthquake and fire destroyed
	much of the city but barely slowed its momentum; San Francisco barreled through the 20th century as a center
	of wealth, military power, progressive culture and high technology.
	<img src="http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg" width="98.9%" />
</div>
</div>

const Tokyo = () =>
<div>
<div className="navbar">
	<h1 className="h1" className="text-info">Tokyo</h1>
</div>
<div>
	Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous metropolis.
	It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities,
	towns and villages west of the city center.
	The Izu and Ogasawara Islands are also part of Tokyo.
	Prior to 1868, Tokyo was known as Edo. A small castle town in the 16th century,
	Edo became Japan's political center in 1603 when Tokugawa Ieyasu established his feudal government there.
	A few decades later, Edo had grown into one of the world's most populous cities.
	With the Meiji Restoration of 1868, the emperor and capital moved from Kyoto to Edo, which was renamed Tokyo ("Eastern Capital").
	Large parts of Tokyo were destroyed in the Great Kanto Earthquake of 1923 and in the air raids of 1945.
	Today, Tokyo offers a seemingly unlimited choice of shopping, entertainment, culture and dining to its visitors.
	The city's history can be appreciated in districts such as Asakusa,
	and in many excellent museums, historic temples and gardens.
	Contrary to common perception, Tokyo also offers a number of attractive green spaces in the city center
	and within relatively short train rides at its outskirts.
	<img src="http://socialventurepartners.s3-us-west-2.amazonaws.com/www.socialventurepartners.org/sites/1/2014/12/Tokyo.Rainbow.Bridge.resized.jpg" width="99%"/>

</div>
</div>

const London = () =>
<div>
<div className="navbar">
	<h1 className="h1" className="text-info">London</h1>
</div>
<div>
	England is full of pageantry and tradition, and nowhere else is that on display so vividly than in London.
	Yet the capital of the United Kingdom is hardly living in the past, continually courting innovation and growth in its art,
	architecture, restaurants, and hotels. From the burgeoning East End to the well-established City Centre,
	London travel guide proves the world-className destination continues to evolve.
	How did a 2,000-year-old settlement with such a deeply entrenched history—and such familiar-to-the-point-of-predictable
	iconography—come to stand at the leading edge of design, fashion, fine art, and pop culture? By embracing international styles
	and influences (and people) as much as passionately as its own.
	<img src="https://media.timeout.com/images/103042848/image.jpg" width="99.5%" />
</div>
</div>


const Links = () =>
<div className="bs-example" className="navbar  navbar-transparent">
    <nav role="navigation" className="navbar navbar-default">
        <div className="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
        <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li><a href="#"><Link to="/"><a href="#">Home</a></Link></a></li>
                <li><a href="#"><Link to="/Plan"><a href="#">Plan your trip</a></Link></a></li>
                <li><a href="#"><Link to="/Places"><a href="#">Places to Visit</a></Link></a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><Link to="/Login">Login</Link></a></li>
            </ul>
        </div>
    </nav>
</div>

const Links1 = () =>
<div className="bs-example">
    <nav role="navigation" className="navbar navbar-default">
        <div className="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
        <div>
            <ul className="nav navbar-nav">
                <li><Link to="/Places/SanFrancisco">San Francisco</Link></li>
                <li><Link to="/Places/Tokyo">Tokyo</Link></li>
                <li><Link to="/Places/London">London</Link></li>
            </ul>
        </div>
    </nav>
</div>


const App = () => {
	return (
		<Router history={ browserHistory }>
			<Route path="/" component={Home}></Route>
			<Route path="/Plan" component={Plan}></Route>
			<Route path="/Places" component={Places}></Route>
			<Route path="/Login" component={Login}></Route>

		</Router>
	)
}
export default App
