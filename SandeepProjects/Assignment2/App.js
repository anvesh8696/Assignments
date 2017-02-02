import React, { Component } from 'react';

class App extends Component{
    constructor (){
      super();
      this.state={
         head:'This is States'
      };
    }
     render(){
      return(
         <div>
           <p><h1>{this.state.head}</h1></p>
           <Name/>
         </div>

        );
     }
}
class Name extends Component{
  render(){
    return(
       <div>
        <p><h4>{this.props.foot}</h4></p>
       </div>
    );
  }
}
Name.defaultProps = {foot:'This is Props'}

export default App;