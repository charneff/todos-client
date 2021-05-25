// We're familiar with the Redux pattern in which the store dispatches an action to the reducer, 
//the reducer uses that action to make changes to the state, 
//and components re-render with new data.

// fetch() request returns something called a Promise. 
//A Promise object is an object that represents some value that will be available later. 
//We can access the data when the promise "resolves" and becomes available by chaining a then() function onto our fetch() call.

//This doesn't solve our problem though because the fetch() function will still return before the Promise is resolved.

//There's another problem. Because retrieving data takes time, and because we always want our Redux application to reflect the current application state, we want to represent the state of the application in between the user asking for data and the application receiving the data. 

//It's almost like each time a user asks for data we want to dispatch two actions to update our state: one to place our state as loading, and another to update the state with the data.

// Invoke fetch()
// Directly after invoking fetch() dispatch an action to indicate that we are loading data.
// Call the fetch() method, which runs, and returns a Promise that we are waiting to resolve.
// When the Promise resolves, dispatch another action with a payload of the fetched data that gets sent to the reducer.

// So we need a way to dispatch an action saying we are loading data, then to make a request to the API, and then to wait for the response and then dispatch another action with the response data.

// We saw that when retrieving data from APIs, we run into a problem where the action creator returns an action before the data is retrieved. 
//To resolve this, we use a middleware called Thunk. Thunk allows us to return a function inside of our action creator instead of a plain JavaScript object. 
//That returned function receives the store's dispatch function, and with that we are able to dispatch multiple actions: one to place the state in a loading state, and another to update our store with the returned data.


export const getTodos = () => {
    return (dispatch) => {
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