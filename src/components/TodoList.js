// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions/todoActions';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
