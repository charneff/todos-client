import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

class TodoForm extends Component {
    state = {
        description: ""
    }

    handleChange = (e) => {
        this.setState({
            description: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const todo = { description: this.state.description }
        this.props.addTodo(todo)
        this.setState({
            description: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                value={this.state.description}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}/>
            </form>
        )
    }
}
export default connect(null, { addTodo })(TodoForm)