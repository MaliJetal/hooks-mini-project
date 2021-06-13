import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function incrementCount() {
    dispatch({ type: "increment" });
  }

  function decrementCount() {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      {state.count}
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
