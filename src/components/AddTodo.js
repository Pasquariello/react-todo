import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
      title: ''
  }

  onChange = (e) => {
      this.setState( {title: e.target.value} ) 
  };

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
  }
 

  render() {
    return (
      <div className="itemRow">
        <form onSubmit={ this.onSubmit } style={{display: 'flex'}}>
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
