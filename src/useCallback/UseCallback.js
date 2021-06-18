import React, { useState } from "react";
import ListItems from "./ListItems";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = () => {
    const list = [number, number + 1, number + 2];
    return list;
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div style={theme} margin="20px">
        <button onclick={() => setDark((prevdark) => !prevdark)}>
          Toggle Button
        </button>
      </div>
      <ListItems getItems={getItems} />
    </div>
  );
}
