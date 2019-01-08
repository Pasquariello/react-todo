import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
      title: ''
  }



  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      
      document.getElementById("addItemForm").reset();


      
  }
  onChange = (e) => this.setState ({ [e.target.name]: e.target.value });
    //this.setState( {title: e.target.value} )
 

  render() {
    return (
      <div className="itemRow">
        <form id="addItemForm" onSubmit={ this.onSubmit } style={{display: 'flex'}}>
            <input 
                type="text" 
                name="title" 
                style={{flex: '10', padding: '5px', borderRadius: '45px', borderStyle:'solid', border:'1px solid #cccccc'}}
                placeholder="Add Todo ..." 
                value={this.state.value}
                onChange={this.onChange}
            />
            <input 
                type="submit" 
                value="Add" 
                className="btn"
                style={{flex: '1', background: 'MediumSeaGreen'}}
            />
        </form>
      </div>
    )
  }
}

export default AddTodo
