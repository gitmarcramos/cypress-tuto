import React from "react";

export default (props) => (
  <form>
    <input
      autoFocus
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={props.handleNewTodoChange}
    />
  </form>
);
