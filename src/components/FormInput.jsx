import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "./DataProvider";

function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  const AddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <>
      <form autoComplete="off" onSubmit={AddTodo}>
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="Add task"
          ref={todoInput}
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default FormInput;
