import React from "react";
import useLocalStorage from "./UseLocalStorage";

export default function UseCustomHook() {
  const [item, setItem] = useLocalStorage("name", "");
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </div>
  );
}
