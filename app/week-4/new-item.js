"use client";
import { useState } from "react";

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main>
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
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
            onChange={handleQuantityChange}
          ></input>
        </div>

        <div>
          <select type="text" value={category} onChange={handleCategoryChange}>
            {options.map((option, index) => (
              <option key={index} label={option} value={option}></option>
            ))}
          </select>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
}

export default NewItem;
