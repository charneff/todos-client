import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getTodos } from './actions/todos'
import TodoForm from './containers/TodoForm'

class App extends Component{

  componentDidMount(){
    this.props.getTodos()
  }

  render(){
    const todos = this.props.todos.map((todo, i) => <li key={i}>{todo.description}</li>)
    return (
      <div className="App">
        <h3>Todos Keeper</h3>
        <hr/>
        <ul>
          {this.props.loading ? <h5>Loading Todos...</h5> : todos}
        </ul>
        <h4>Create Todo:</h4>
        <TodoForm />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    todos: state.todoReducer.todos,
    loading: state.todoReducer.loading
  }
}
export default connect(mapStateToProps, { getTodos })(App);
