import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router';


class ReactContent extends Component {
    render(){
        return (
        	
            <SideBar />
        	
   	   ); 
    }
}
class SideBar extends Component{
render(){
  return(

    <div className="col-sm-2 sideBar">
      <div className="container-fluid sideBar-cont" >
        <nav className="navbar navbar-default navbar-fixed-side">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav">
                  <li><Link activeStyle={{color:'orange'}} to="/films">Films</Link></li>
                  <li><Link activeStyle={{color:'orange'}} to="/warships">Warships</Link></li>
                  <li><Link activeStyle={{color:'orange'}} to="/actors">Actors</Link></li>
                  <li><Link activeStyle={{color:'orange'}} to="/userInfo">Data Entry App</Link></li>
              </ul>
            </div>
        </nav>
      </div>
  </div>  
  
    );
}
}





export default ReactContent;