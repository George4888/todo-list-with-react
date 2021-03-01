import React, { useContext } from "react";
import ListItem from "./ListItem";

import { DataContext } from "./DataProvider";

function List() {
  const [todos, setTodos] = useContext(DataContext);

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <ListItem todo={todo} key={index} id={index} />
        ))}
      </ul>
    </>
  );
}

export default List;
