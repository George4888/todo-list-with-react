import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <DataContext.Provider value={[todos, setTodos]}>
        {props.children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
