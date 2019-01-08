import React, { Component } from 'react'
import PropTypes from "prop-types";

export class TodoItem extends Component {

    getStyle = () => {
        return {         
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',            
            color: this.props.todo.important ? 'red' : 'black', 
            float: 'left',
        }
    }
    
  render() {
    //destrructuring
    const { id, title } = this.props.todo;
    return (
      <div className="itemRow">
            <p style={ this.getStyle() }>
            <input type="checkbox" onChange={ () => this.props.toggleComplete(id) } />{' '}
            {title}
            </p>
            <div style={{float: 'right', display: 'inline-block'}}>
            <button style={btnStyle} className="btn" onClick={ () => this.props.toggleImportance(id) }>Toggle Importance</button> 
            <button onClick={this.props.delTodo.bind(this, id)} style={btnDeleteStyle} className="btn">X</button>
            </div>
      
      </div>
    )
  }
}

//propTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background:'DodgerBlue',
}

const btnDeleteStyle = {
    background:'tomato',
}

export default TodoItem
