//import { act } from "@testing-library/react";
import React, { useState, useReducer } from "react";

import Todo from "./Todo";

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  ADD_TODO: "add-Todo",
  TOGGLE_TODO: "toggle-Todo",
  DELETE_TODO: "delete-Todo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.ADD_TODO:
      console.log(state);
      return [...state, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function UseReducer() {
  //const [state, dispatch] = useReducer(reducer, { count: 0 });
  // function incrementCount() {
  //   dispatch({ type: "increment" });
  // }

  // function decrementCount() {
  //   dispatch({ type: "decrement" });
  // }
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}
