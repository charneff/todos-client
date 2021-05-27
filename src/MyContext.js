import React, { useState, useEffect } from 'react'

const MyContext = React.createContext()

export default MyContext;

function MyProvider(props){
    const [todos, setTodos] = useState([])
    useEffect(() => {
        console.log("fetching todos")
        fetch('/todos')
        .then(res => res.json())
        .then(data => {
            setTodos(data)
        })
    }, [])

    const addTodo = todo => {
        fetch('/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(data => setTodos([...todos, data]))
    }

    const deleteTodo = todoId => {
        fetch(`/todos/${todoId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            const newTodos = todos.filter(todo => todo.id !== parseInt(todoId))
            setTodos(newTodos)
        })
    }


    return <MyContext.Provider value={{
        todos,
        addTodo,
        deleteTodo
    }}>{props.children}
    </MyContext.Provider>
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }
