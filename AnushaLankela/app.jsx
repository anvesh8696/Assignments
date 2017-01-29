import React from 'react';

/*class App extends React.Component {
   render() {
      return (
         <div>

           <Header/>
           <Body/>
           <Footer/>
            
         </div>
      );
   }
}
const Header = () => <img src="./images/header.jpg" alt="header image"/>
const Body = () => <p>this is Body Text </p>
const Footer = () => <p>this is Footer &copy;Anusha 2017 </p>*/

//statefull component
/*class App extends React.Component {
 render(){
  return <Android version="two"/>
 }
}

//stateless component
const Android = (props)=><h1>{props.version}</h1>


Android.propTypes = {
 version(props, propName, component){
  if(!(propName in props)){
   return new Error(`Missing ${propName}`)
  }
  if((props[propName].length)<4){
   return new Error(`${propName} is too short`)
  }
 }
} */


/* class App extends React.Component {
 constructor(){
 super();
  this.state = {
   txt:"welcome--------"
  }
 }
 update(e){
  this.setState({txt:e.type})
 }

 render(){
  return (
   <div>
    <textarea rows="10" cols="10"
        onChange={this.update.bind(this)}
        onClick={this.update.bind(this)}
        onCopy={this.update.bind(this)}
        onMouseDown={this.update.bind(this)}
   ></textarea>
    <h1>{this.state.txt}</h1>
   </div>
  )
 }



} */


/*class App extends React.Component {
 constructor(){
  super()
  this.state = {
   box1:"welcome-------"
  }
 }
 update(){
  this.setState({
   box1:this.refs.one.value,
   box2:this.refs.two.value
  })
 }
 render(){
  return (
   <div>
    <input ref="one" type="text" onChange={this.update.bind(this)} />
    <h1>{this.state.box1}</h1>
    <input ref="two" type="text" onChange={this.update.bind(this)} />
    <h1>{this.state.box2}</h1>
   </div>
  )
 }
} */

import ReactDOM from 'react-dom'

class App extends React.Component {
 constructor(){
  super()
  this.state ={
   val:0
  }
 }
 update(){
  this.setState({val:this.state.val+1})
 }
 componentWillMount(){
  console.log("componentWillmount will trigger before render method or before comp is mounted on dom")
 }
 componentDidMount(){
  console.log('componentDidMount will trigger when the comp is mounted on the dom')
 }
 componentWillUnmount(){
  console.log("componentWillUnmount will trigger when the comp is removed from the dom")
 }
 render(){
  console.log("render")
  return (
   <div>
    <button onMouseOver={this.update.bind(this)}>{this.state.val}</button>
   </div>
  )
 }
}





export default App;