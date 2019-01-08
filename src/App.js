import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos :[
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false,
        important: false
      },
      {
        id: uuid.v4(),
        title: 'Walk the dog',
        completed: false,
        important: false
      },
      {
        id: uuid.v4(),
        title: 'Do the dishes',
        completed: false,
        important: false
      }
    ]
  }

  
  toggleComplete = (id) => {
    console.log(id)
    //change state of where id is equal
    this.setState({ todos: this.state.todos.map(todo => { 
        if(todo.id === id) {
          todo.completed = !todo.completed 
        }
        return todo;
      })
    });
  }

  toggleImportance = (id) => {
    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <AddTodo addTodo={this.addTodo}></AddTodo>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} toggleImportance={this.toggleImportance} delTodo={this.delTodo}></Todos>
      </div>
    );
  }
}

export default App;
