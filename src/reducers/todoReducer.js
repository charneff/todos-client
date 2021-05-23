export default (state = { todos: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_TODOS":
            return {
                ...state, 
                loading: true
            }
        case "TODOS_LOADED":
            return {
                ...state, 
                todos: action.payload,
                loading: false
            }
        case "ADDING_TODO":
            return {
                ...state,
                loading: true
            }
        case "TODO_ADDED":
            return {
                todos: [...state.todos, action.payload], 
                loading: false
            }
        case "DELETING_TODO":
            return {
                ...state, 
                loading: true
            }
        case "TODO_DELETED":
                return {
                    todos: [...state.todos.filter(todo => `${todo.id}` !== action.payload)],
                    loading: false
                }
        default:
            return state
    }
}