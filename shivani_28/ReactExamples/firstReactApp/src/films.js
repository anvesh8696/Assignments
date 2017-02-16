import React, { Component } from 'react';
import './App.css';


class FilmContent extends Component{
constructor(){
		super();
		this.state={
			films: []
		}
	}
componentWillMount(){
			
  fetch('https://swapi.co/api/people?format=json')
    .then(response =>response.json())
    .then(({results:films})=>

  
    	this.setState({films})

    )
}
	

render () {

    let users = this.state.films;   
   
   return (
      <div className="App-content">
          <div className="container">
          <h3>User Information</h3>
              <div className="jumbotron">
              
                  <table className="table table-responsive table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Movie List</th>                   
                    </tr>
                  </thead>
                  <tbody>
                    {
                     users.map((person, index) => <TableRow key={index} user={person}  />)
                   }
                      
                  </tbody>  

                </table>
             
            </div>
           </div>
      </div>
      );
  }
}


class TableRow  extends Component{ 


 render(){
    return (
            <tr id="table-row">  
              <td>{this.props.user.name}</td>   
              
              <td>
              	 {
          			this.props.user.films.map((film, i) => <li key={i}> <a href={film} >Film</a> </li>)
          		 }
             
              </td>
            </tr> 
         );
        }   
  }

  export default FilmContent