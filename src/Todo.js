import React from "react";
import { ACTIONS } from "./UseReducer";

export default function Todo({ todo, dispatch }) {
  return (
    <div margin="2px">
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: "toggle-Todo", payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: "delete-Todo", payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
