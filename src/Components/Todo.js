import React from "react";

const Todo = ({ text, todo, setTodo, td }) => {
  const deleteHandler = () => {
    // console.log(td);
    setTodo(
      todo.filter((t) => {
        return t.id !== td.id;
      })
    );
  };

  const completeHandler = () => {
    setTodo(
      todo.map((el) => {
        if (el.id === td.id) {
          return { ...el, done: !el.done };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${td.done ? "completed" : ""}`}> {text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
