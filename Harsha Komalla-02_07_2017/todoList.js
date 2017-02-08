import React from 'react'
import TodoHeader from './todoHeader'
import TodoListItems from './todoListitems'
import _ from 'lodash'

class Todolist extends React.Component{
    displayItems(){
        console.log(this.props.items)
        return _.map(this.props.items,(todo,index)=><TodoListItems key={index} {...todo}/>)
    }
    render(){
        return(
            <table className="table table-bordered">
                <TodoHeader />

                <tbody>
                {this.displayItems()}
                </tbody>
            </table>
        )
    }
}

export default Todolist