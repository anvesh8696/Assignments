import React, { Component } from 'react';

class App extends Component {

  render() {
      return (
        <div>
          <ColorComp myColor="Red" thing="Lava"/>
          <ColorComp myColor="Yellow" thing="Sun"/>
          <ChildProp name="The Lava " >is Red</ChildProp>
          <ChildProp name="The Sun ">is Yellow</ChildProp>

        </div>
      )
     }
   }
   const ColorComp = (props)=><h1>{props.thing}</h1>//created a color component

const sunstyle = {
  color:"Yellow"
};

const lavastyle = {
  color:"Red"
};

// created custom propTypes
   ColorComp.propTypes = {
       myColor(props, propsName, component){

           if((props[propsName])==="Red"){
               return new Error(`This is lava`)
           }
           if((props[propsName])==="Yellow"){
               return new Error(`I am the Sun`)
           }
         }
       }

//Using props.children
class ChildProp extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.name}<span>{this.props.children}</span></h2>

      </div>
    )
  }
}

export default App;
