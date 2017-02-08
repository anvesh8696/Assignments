import React from 'react'

class TodoListItems extends React.Component{
constructor(){
    super();
    this.state={
        isEdit:false
    }
}
renderItems(){
    return(
            <td>{this.props.firstName}-{this.props.lastName}</td>
    )
}

editClick(){
    this.setState({isEdit:true})
}
cancelClick(){
    this.setState({isEdit:false})
}


renderItemsAction(){
    if(this.state.isEdit){
        return(
        <td>
            <button className="btn btn-success">Save</button>
            <button className="btn btn-danger" onClick={this.cancelClick.bind(this)}>Cancel</button>
        </td>
        )
    }

    return(
        <td>
            <button className="btn btn-primary" onClick={this.editClick.bind(this)}>Edit</button>
             <button className="btn btn-danger">Delete</button>
        </td>

    )
}

        render(){
            return(
                <tr>
                    {this.renderItems()}
                    {this.renderItemsAction()}
                </tr>
            )
        }
}

export default TodoListItems