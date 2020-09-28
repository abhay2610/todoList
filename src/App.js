import React, { useEffect, useState } from "react";
import "./styles.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodo, setFilteredTodo] = useState([]);
  //setStatus("hello");   why this rendering infinte times?
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(
          todo.filter((td) => {
            return td.done === true;
          })
        );
        break;
      case "uncompleted":
        setFilteredTodo(
          todo.filter((td) => {
            return td.done !== true;
          })
        );
        break;
      default:
        setFilteredTodo(todo);
        break;
    }
  };
  useEffect(() => {
    filterHandler();
  }, [todo, status]);
  return (
    <div className="App">
      <h1>
        My TodoList
        <span role="img" aria-label="fun">
          😎😜
        </span>
      </h1>
      <Form
        todo={todo}
        setTodo={setTodo}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todo={todo} setTodo={setTodo} filteredTodo={filteredTodo} />
    </div>
  );
}
