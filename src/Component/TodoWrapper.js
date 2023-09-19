import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([
      ...todos,
      { id: Math.random(), value, completed: false, Editing: false },
    ]);
  };

  const completedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id != id));

  const editTodo = (id) =>
    setTodos(
      todos.map(
        (todo) => (todo.id == id ? { ...todo, Editing: !todo.Editing } : todo)
      )
    );

    const editing = (value , id) =>
    setTodos(
      todos.map(
        (todo) => (todo.id == id ? { ...todo,value, Editing: !todo.Editing } : todo)
      )
    );
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.Editing ? (
            <EditTodoForm task = {todo} editing ={editing}/>
          ) : (
            <Todo
              task={todo}
              completedTodo={completedTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoWrapper;
