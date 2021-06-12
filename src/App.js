import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  //initialising object and using it
  const [obj, setObj] = useState({ 1: "orange", 2: "blue", 3: "green" });

  function insertObj() {
    setObj((prevobj) => {
      return { ...prevobj, 4: "yellow" };
    });
    console.log(obj);
  }

  function incrementalCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementalCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <button onClick={decrementalCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementalCount}>+</button>
      <>{obj[count]}</>
    </div>
  );
}

export default App;
