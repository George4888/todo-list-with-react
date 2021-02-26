import React from "react";

function FormInput() {
  return (
    <>
      <form autoComplete="off">
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="Add task"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default FormInput;
