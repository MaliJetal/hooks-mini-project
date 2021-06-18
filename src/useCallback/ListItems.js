import React from "react";

export default function ListItems({ getItems }) {
  const items = getItems();
  console.log(items);
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
