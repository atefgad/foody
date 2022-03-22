import { Reorder } from "framer-motion";
import { useState } from "react";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

function Redorder() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item
          value={item}
          className="d-block bg-white shadow rounded-3 fw-bold p-4 w-25 mb-3 py-sm-4"
        >
          <span>{item}</span>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default Redorder;
