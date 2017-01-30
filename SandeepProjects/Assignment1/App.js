import React, { Component } from 'react';

class App extends Component {
   render (){
    let url="https://facebook.github.io/react/docs/hello-world.html"
    return (
        <div> 
           <h1> ReactApp </h1>
           <a href={url}> Learn React </a>
           <Header/>
           <OtherComponent/>

        </div>
      )
   }
} 

class OtherComponent extends Component {
   render (){
       return(
         <div>
            <h2>OtherComponent</h2>
         </div>
        )
   }
} 

const Header = () => <div> <p>This is Header</p><p>This is Header</p></div>

export default App;
