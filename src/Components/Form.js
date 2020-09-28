import React from "react";

const Form = ({ setInputText, inputText, todo, setTodo, setStatus }) => {
  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };
  const todoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: inputText, id: Math.random() * 1000, done: false }
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={todoHandler} type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
