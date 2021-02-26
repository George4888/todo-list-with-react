import React from "react";

function List() {
  return (
    <>
      <ul>
        <li>
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            Task to do
          </label>
          <button>Edit</button>
        </li>
      </ul>
    </>
  );
}

export default List;
