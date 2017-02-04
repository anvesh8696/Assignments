import React from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

const Outer = (props) => <div><h1>Mythri consulting </h1><Links/>{props.children}</div>
const Home = () => <div><h1>Welcome</h1></div>
const AboutUs = () => <div><h1>AboutUs</h1><p>Mythri Consulting is a one-stop hub for IT Training and Placement services. With many years of experience and high quality team of experts, we have established ourselves as a pioneer in the Industry. We help individuals with IT backgrounds, either graduates or post graduates, through industry level training in major advance technologies such as Java UI, Big Data, .Net, Java, iOS/Android, Infomatica, Websphere Admin, Weblogin Admin, Selenium Automation QA, Sales Force and many others.</p></div>
const ContactUs = () => <div><h1>ContactUs</h1>You Can Contact Us through -----</div>

const Links =() =>
<nav>
	<Link  activeStyle={{color:'orange'}} to="/Home">Home</Link>
	<Link activeStyle={{color:'orange'}} to="/Aboutus">AboutUs</Link>
	<Link activeClassName='active' to="/Contactus">ContactUs</Link>
	</nav>

const App = () => {
return (
 	<Router history={browserHistory}>
 	<Route path="/" component={Outer}>
 	<Route path="Home" component={Home}></Route>
        <Route path="AboutUs" component={AboutUs}></Route>
			    <Route path="Contactus" component={ContactUs}></Route>

		</Route>

		</Router>
 )}

export default App