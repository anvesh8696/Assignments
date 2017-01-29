import React from 'react'
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            val:3,
           txt:"click here"
        }
    }
    update(){
          this.setState({val:this.state.val*2})
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
    return(
        <div>
            <button onClick={this.update.bind(this)}> {this.state.val} </button>
            <p> {this.state.txt} </p>
        </div>
    )
}
}
class Wrapper extends React.Component {
    mount(){
        ReactDOM.render(<App/>,document.getElementById('qwerty'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('qwerty'))
    }
    render(){
        return(
            <div>
                <button onClick={this.mount.bind(this)}>mount </button>
                <button onClick={this.unmount.bind(this)}> unmount </button>
                <div id="qwerty"> </div>
            </div>
        )
    }
}
//export default App;
export default Wrapper;
// Refs
    /*constructor() {
        super();
        this.state = {
            txt: "Full Name",
            txt1: "Address"
        }
    }

    update() {
        this.setState({
            txt: this.refs.name.value,
            txt1: this.refs.location.value
        })
    }

    render() {
        return (
            <div>
                <input ref="name" type="text" onChange={this.update.bind(this)}/>
                <h1> {this.state.txt}</h1>
                <input ref="location" type="text" onChange={this.update.bind(this)}/>
                <h2> {this.state.txt1} </h2>
            </div>
        )

    }
}*/

// Event System
/*constructor() {
        super();
        this.state = {
            txt: "Type here"
        }
    }
    update(e){
        this.setState({txt:e.target.value})
    }

    render() {
    return (
        <div>
            <h2> {this.state.txt}</h2>

            <textarea rows="10" cols="10"
            onClick={this.update.bind(this)}
            onChange={this.update.bind(this)}
            onFocus={this.update.bind(this)}
                      onBlur={this.update.bind(this)}
            onKeyDown={this.update.bind(this)}>
            </textarea>


        </div>
    )}
}*/
// custom propType
   /* render() {
        return <Sample iphone="sixpl"/>
    }
}
const Sample =(props) => <p> {props.iphone} </p>

Sample.propTypes = {
    iphone(props, propName, component){
        if (!(propName in props)) {
            return new Error(`Missing ${propName}`)
        }
        if ((props[propName].length) < 6) {
            return new Error(`${propName} is too short`)
        }
    }
}*/
//props.children
       /*return <Button> I <Heart/> React </Button>
    }
}
const Button = (props) => <button> {props.children} </button>
const Heart = () => <span> &hearts; </span>*/

// App Component
/*<div>
 <Header/>
 <Body/>
 <Footer/>
 </div>
 )
 }
 }
 const Header =()=> <img src="./img/image.jpg" alt="nature"/>
 const Body =()=> <h1> Welcome to React </h1>
 const Footer =()=> <p> A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES </p>*/






