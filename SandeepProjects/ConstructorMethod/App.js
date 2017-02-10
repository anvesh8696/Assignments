import React from 'react';
import ReactDom from "react-dom";

class Layout extends React.Component {
  constructor(){
     super();
     this.name = "Sandeep";
  }

  render() {
    return (
      <h1>This is {this.name}...!!!!</h1>
      );
    }
  }

  const app = document.getElementById('app');

  ReactDom.render(<Layout/>,app);
