import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
const Home = () => <div><h1>This is my home page Do u wana know about me click on Aboutus ,to  contact me click on Contactus </h1><Links/></div>
const MYinfo = () => <div><h1>Do u wana know About me Sorry you need to wait </h1><Links/></div>
const Contatme = () => <div><h1>Hear are my contact details Call me @ ********* Email me@ **********@outlook.com </h1><Links/></div>
const Links = () =>
	<nav>
  		<Link to="/">Home</Link>
		<Link to="/MYinfo">MYinfo</Link>
		<Link to="/Contatme">Contatme</Link>
    <Link to="/Home"></Link>
	</nav>
const App = () => {
	return (
		<Router history={ browserHistory }>
			<Route path="/" component={Home}></Route>
			<Route path="/MYinfo" component={MYinfo}></Route>
			<Route path="/Contatme" component={Contatme}></Route>
      <Route path="/Home" component={Home}></Route>
		</Router>
	)
}
export default App
