import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");

  const AddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };

  return (
    <>
      <form autoComplete="off" onSubmit={AddTodo}>
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="Add task"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value.toLowerCase())}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default FormInput;
