import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi.js';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>ToDos - RTK Query</h1>
      <hr />
      <h4>IsLoading: {isLoading ? 'true' : 'false'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Previous ToDo</button>
      <button onClick={nextTodo}>Next ToDo</button>

      {/*
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong> {todo.completed ? 'DONE ' : 'Pending '}</strong>
            {todo.title}
          </li>
        ))}
      </ul>

        */}
    </>
  );
};
