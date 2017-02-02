import React from 'react';

class App extends React.Component {
    render(){
            return(
            <div>
            <Fname fname="six"/>
            <Lname lname="five"/>
            </div>
            )
    }
}

const Fname = (props)=><h1>{props.fname}</h1>
const Lname = (props)=><h1>{props.lname}</h1>

Fname.propTypes = {
        fullnmae(props, propName, component){
            if(!(propName in props)){
               return new Error('Missing ${propName}')
            }
            if((props[propName].length)<6){
                    return new Error('${propName} is too short')
            }
        }
}

export default App