import React from 'react'
import Todolist from './todoList'

const items = [
    {
        firstName: 'Harsha',
        lastName: 'Komalla'
    },
    {
        firstName: 'Mythri',
        lastName: 'Consulting'
    }
]

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            items
        }
    }
    render(){
        return(
            <div>
                <h1>Sample Todo App</h1>
                <Todolist items={this.state.items}/>
            </div>

        )
    }
}

export default App