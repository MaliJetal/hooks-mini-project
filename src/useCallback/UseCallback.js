import React, { useState, useCallback } from "react";
import ListItems from "./ListItems";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(
    (incrementor) => {
      const list = [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
      console.log(list);
      return list;
    },
    [number]
  );

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
        <button onClick={() => setDark((prevdark) => !prevdark)}>
          Toggle Button
        </button>
      </div>
      <ListItems getItems={getItems} />
    </div>
  );
}
