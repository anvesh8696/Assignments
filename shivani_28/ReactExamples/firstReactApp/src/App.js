import React, { Component } from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import HomeContent  from './home.js';
import AboutContent  from './about.js';
import ContactContent  from './contact.js';
import ReactContent from './reactjs.js';
 import './App.css';


class App extends Component{
    render() {
        return (
            <div>
                <Header></Header>
                <Router history={ browserHistory }>
                        <Route path="/" component={LandingPage}>
                            <IndexRoute component={Home} />
                        </Route>
                        <Route path="about" component={About} />    
                        <Route path="contact" component={Contact} />
                        <Route path="react" component={ReactJs} />
                </Router>
                <Footer></Footer>
            </div>
        );
    }
}

class Header extends Component{
    render () {

        return (
            <div className="App-header">

            </div>
        );
    }
}

class Nav extends Component{
    render(){
        return(
               <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">

                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/"></Link>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                                <ul className="nav navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/react">React Examples</Link></li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                    <div>
                        {this.props.children}
                    </div>
               </div>
        );
    }
}


class Home extends Component{
    render(){
        return(
            <div><Nav/><HomeContent/></div>
        );
    }
}

class About extends Component{
    render(){
        return(
            <div><Nav/><AboutContent/></div>

        );
    }
}

class Contact extends Component{
    render(){
        return(
            <div><Nav/><ContactContent/></div>
        );
    }
}


class ReactJs extends Component{
    render(){
        return(<div><Nav/><ReactContent/></div>);
    }
}

class LandingPage extends Component{
    render(){
        return(<div><Nav/><h1>This is the landing Page</h1><HomeContent/></div>);
    }
}


class Footer extends Component {

    render() {
        return (
            <div className="App-footer">
                <p> Copyright &copy; ReactApps.com </p>
            </div>
        );
    }

}
export default App



