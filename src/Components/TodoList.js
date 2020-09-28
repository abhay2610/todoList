import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, setTodo, filteredTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodo.map((t) => (
          <Todo key={t.id} text={t.text} todo={todo} setTodo={setTodo} td={t} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
