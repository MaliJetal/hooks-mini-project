import React, { useState, useEffect } from "react";

export default function ListItems({ getItems }) {
  const [items, setItems] = useState([]);
  //const items = getItems();

  useEffect(() => {
    console.log(items);
    setItems(getItems(5));
  }, [getItems]);

  return (
    <div>
      <table>
        {items.map((item) => {
          return <ul>{item}</ul>;
        })}
      </table>
    </div>
  );
}
