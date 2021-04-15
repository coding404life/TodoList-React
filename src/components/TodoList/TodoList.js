import React, { useContext } from "react";
import styles from "./TodoList.module.css";

import todoContext from '../../context/todo-context';
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(todoContext);

  return (
    <div className={styles.todoList}>
      <h3 className={styles.todoList__title}>TO-DOS</h3>
      <div className={styles.todoList__todos}>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text}
            complete={todo.complete}
            clickToToggle={() => toggleTodo(todo.id)}
            clickToDelete={() => deleteTodo(todo.id)} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
