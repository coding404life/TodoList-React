import React, { useReducer } from 'react'
import TodoContext from './todo-context';
import todoReducer from './todo-reducer';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todo-action';

// const result = localStorage.getItem('todo')
// console.log(result);

const TodoState = (props) => {

    const initialState = {
        todos: []
    }
    const [ state, dispatch ] = useReducer(todoReducer, initialState);
    // console.log(state);

    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }
    //toggle todo
    const toggleTodo = (todoID) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoID
        })
    }
    //delete todo
    const deleteTodo = (todoID) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoID
        })
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                toggleTodo,
                deleteTodo
            }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState
