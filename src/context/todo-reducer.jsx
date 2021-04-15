import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todo-action';

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [ ...state.todos, action.payload ]
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo =>
                    todo.id === action.payload ?
                        { ...todo, complete: !todo.complete }
                        : todo
                )
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
}

export default todoReducer;