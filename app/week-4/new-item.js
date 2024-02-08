"use client";
import { useState } from "react";

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    alert(`Added Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset state variables to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const options = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  return (
    <form>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item name"
        ></input>
      </div>

      <div>
        <input
          type="number"
          name="quantity"
          min={1}
          max={99}
          value={quantity}
          required
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
      </div>

      <div>
        <select
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} label={option} value={option}></option>
          ))}
        </select>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default NewItem;
