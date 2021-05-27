import React from 'react'
import TodoForm from './TodoForm'
import { MyConsumer } from '../MyContext'

export default function Todos() {
    return (
        <MyConsumer>
            { context => {
              const handleClick = (event) => {
                context.deleteTodo(event.target.id)
              }
              const todos = context.todos.map((todo, i) => <p key={i}>{todo.description} <button id={todo.id} onClick={handleClick}>X</button></p>)
              return (
                <div className="App">
                  <h3>Todos Keeper</h3>
                  <hr/>
                   {todos}
                  <h4>Create Todo:</h4>
                  <TodoForm />
                </div>
              );
            }
            }
        </MyConsumer>
    )
}