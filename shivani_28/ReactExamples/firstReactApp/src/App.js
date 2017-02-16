import React, { Component } from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import HomeContent  from './home.js';
import AboutContent  from './about.js';
import ContactContent  from './contact.js';
import ReactContent from './reactjs.js';
import UserTable from './usertable.js';
import FilmContent from './films.js';
import './App.css';


class App extends Component{
    render() {
        return (
            <div>
                <Header></Header>
                <Router history={ browserHistory }>
                        <Route path="/" component={Nav}>
                            <IndexRoute component={Home} />
                        </Route>
                        <Route path="about" component={About} />    
                        <Route path="contact" component={Contact} />
                        <Route path="react" component={ReactJs} />

                        <Route path="films" component={Films} />
                        <Route path="warships" component={Warships} />
                        <Route path="actors" component={Actors} />
                        <Route path="userInfo" component={DataEntry} />
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
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                                <ul className="nav navbar-nav">
                                    <li><Link activeStyle={{color:'orange'}} to="/">Home</Link></li>
                                    <li><Link activeStyle={{color:'orange'}} to="/about">About</Link></li>
                                    <li><Link activeStyle={{color:'orange'}} to="/contact">Contact Us</Link></li>
                                    <li><Link activeStyle={{color:'orange'}} to="/react">React Examples</Link></li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                    <div className="childContainer col-sm-10">
                        {this.props.children}
                    </div>
               </div>
        );
    }
}


class Home extends Component{
    render(){
        return(
            <div><HomeContent/></div>
        );
    }
}

class About extends Component{

  constructor(){

    super();
    this.state={
      title: 'What is React?'
    }
  }

changeTitle(){
    this.setState({title: 'Title has changed'})
  }
    render(){
        return(
            <div><Nav/><AboutContent title={this.state.title} changeTitle={this.changeTitle.bind(this)}/></div>

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

class DataEntry extends Component{
    render(){
        return(<div><Nav/><ReactContent/><UserTable /></div>);
    }
}

class Films extends Component{
    render(){
        return(<div><Nav/><ReactContent/><FilmContent /></div>);
    }
}

class Warships extends Component{
    render(){
        return(<div><Nav/><ReactContent/><h1 className="childContainer col-sm-10">These are Warships</h1></div>);
    }
}

class Actors extends Component{
    render(){
        return(<div><Nav/><ReactContent/><h1 className="childContainer col-sm-10">These are Actors</h1></div>);
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



