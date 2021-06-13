import React, { useState, useEffect, useRef } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  // useEffect(() => {
  //   setRenderCount((prevRenderCount) => prevRenderCount + 1);
  // }, []);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is {name}</p>
      <div margin="2px">and it used to be {prevName.current}</div>
      {renderCount.current}
      <button onClick={focus}>Focus</button>
    </div>
  );
}
