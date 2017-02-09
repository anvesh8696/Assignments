import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';


class UserTable extends Component{ 

 constructor(){
   super();

   this.state ={
    data : [],
    search: ''
   }
    this.rootPath = firebase.database().ref().child('users');
    this.keys = [];
}
    
componentWillMount(){
  this.snaps = [];
  this.rootPath.on('child_added', (snapshot) => {
       
       if(snapshot.val() == null){
            return this.snaps;
       }else{
          this.snaps.push(snapshot.val());
          this.setState({data: this.snaps});
       }
   });

 this.rootPath.on('child_removed', (snapshot) => {
    
     var i = this.state.data.findIndex(x => x.id === snapshot.val().id);
     this.snaps.splice(i, 1);
     this.setState({data: this.state.data});
  });
}

sendContent() {

    var person = {
      "id": Math.floor((Math.random() * 10000) + 1),
      "name": this.refs.name.value,
      "age": this.refs.age.value
    };
   
    this.rootPath.push(person);
    this.refs.name.value ='';
    this.refs.age.value = '';
  } 
  
changeContent(e) {}

deleteRow(id){ 
  this.rootPath = firebase.database().ref();
  var query = firebase.database().ref('/users').orderByChild('id').equalTo(id);
  query.on('value', data => {
    data.forEach(snapshot => {
        let key = snapshot.key;
        this.childPath = this.rootPath.child('users/' +key);
      });
    });
 this.childPath.remove()
}

updateNode(){
  console.log(this.props.user.name);
  console.log(this.props.user.age);
  //this.refs.name.value = this.props.user.name;
}

filter(e){
   this.setState({search: e.target.value})
 }

render () {
 
  var users = this.state.data.filter(
          (user) => {
            return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;    
        });

   return (
      <div className="App-content childContainer col-sm-10">
          <div className="container">
          <h3>User Information</h3>
              <div className="jumbotron">
              <div className="filter-input">
                 <label>Search: </label> 
                 <input type="text"  value={this.state.search} onChange={this.filter.bind(this)} placeholder="search user"/> 
                 </div>
                 <br/><br/>
                  <table className="table table-responsive table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                     users.map((person, index) => <TableRow key={index} user={person} removePerson={this.deleteRow} editPerson={this.updateNode} />)
                   }
                  </tbody>           
                </table>
              </div>
              Enter name:<input type="text" ref="name" onChange={this.changeContent.bind(this)}/>&nbsp;
                Enter age:<input type="text" ref="age"  onChange={this.changeContent.bind(this)} />&nbsp;
                <button onClick={this.sendContent.bind(this)}>submit</button> 
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
              <td>{this.props.user.age}</td>
              <td><button className='btn btn-info' onClick={this.props.editPerson.bind(this, this.props.user)}>Edit</button></td>
              <td><button className='btn btn-danger' onClick={this.props.removePerson.bind(this, this.props.user.id)} >Delete</button></td>
            </tr> 
         );
        }   
  }



export default UserTable;