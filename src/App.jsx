import { useState } from "react";

function Item({ item }) {
  return <li>
    {item.name}
  </li>;
}
export default function App() {
  const [items, setItems] = useState( [
    { name: "Apple", done: false },
    { name: "Orange", done: false },
    { name: "Banana", done: false },
  ]);

  const add = () => {
    setItems([{ name: "new Item", done: false }, ...items])
  };

  return (
    <>
      <h1>Hello React({items.length})</h1>
      <button onClick={add}>Add</button>
      <ul>
        {items.map(item => {
          return <Item item={item} />
        })}
      </ul>
    </>
  )
}