export const getTodos = () => {
    return (dispatch )=> {
        dispatch({ type: "LOADING_TODOS" })
        fetch('/todos')
        .then(res => res.json())
        .then(todos => dispatch({
            type: "TODOS_LOADED",
            payload: todos
            }))
    }
}

export const addTodo = (todo) => {
    return (dispatch )=> {
        dispatch({ type: "ADDING_TODO" })
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }
        fetch('/todos', configObj)
        .then(res => res.json())
        .then(todo => dispatch({
            type: "TODO_ADDED",
            payload: todo
            }))
    }
}

export const deleteTodo = (id) => {
    return (dispatch)=> {
        dispatch({ type: "DELETING_TODO" })
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`/todos/${id}`, configObj)
        // .then(res => res.json())
        .then(() => dispatch({
            type: "TODO_DELETED", payload: id
            }))
    }
}