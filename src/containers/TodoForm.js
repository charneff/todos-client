import React from 'react'
import { MyConsumer } from '../MyContext'
import { useState } from 'react'


export default function TodoForm() {
    const [description, setDescription] = useState("")
    return (
        <MyConsumer>
            {context => {
                    const handleChange = (e) => {
                        setDescription(e.target.value)
                        }
                    
                    const handleSubmit = (e) => {
                        e.preventDefault()
                        const todo = { description }
                        context.addTodo(todo)
                        setDescription("")
                    }
                
        return(
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={description}
                onChange={handleChange}/>
            </form>)
            }}
        </MyConsumer>
    )
}