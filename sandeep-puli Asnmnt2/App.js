import React, { Component } from 'react';

class App extends Component {

  render() {
      return (
        <div>
          <FNameComp fname="null" lname="puli"/>
          <PropChild name="my firstName">is sandeep kumar</PropChild>
          <PropChild name="my lastName">is puli</PropChild>

        </div>
      )
     }
   }
   const FNameComp = (props)=><h1>{props.lname}</h1>

//custom propTypes
   FNameComp.propTypes = {
       fname(props, propsName, component){

           if((props[propsName])==="null"){
               return new Error(`$[propsName] is not accepted`)
           }
           if((props[propsName])!=="puli"){
               return new Error(`Oops lastName should be puli`)
           }
         }
       }

//Using props.children
class PropChild extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.children}</h2>
      </div>
    )
  }
}

export default App;
