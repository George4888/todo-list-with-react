import React from "react";

const Info = () => {
  return (
    <>
      <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          All
        </label>
        <p>You have 0 tasks to complete</p>
        <button id="delete">Delete</button>
      </div>
    </>
  );
};

export default Info;
