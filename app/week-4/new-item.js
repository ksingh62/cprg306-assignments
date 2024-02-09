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

    alert(`Added Item: ${name}
Quantity: ${quantity}
Category: ${category}`);

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
    <main className="flex align-items justify-center">
      <div className="w-full max-w-md bg-slate-800 text-black p-8 rounded-lg shadow-md mt-8">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Item name"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            ></input>
          </div>

          <div className="flex justify-between space-x-4 mb-4">
            <input
              type="number"
              name="quantity"
              min={1}
              max={99}
              value={quantity}
              required
              onChange={handleQuantityChange}
              className="w-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            ></input>

            <select
              type="text"
              value={category}
              onChange={handleCategoryChange}
              className="w-44 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 "
            >
              {options.map((option, index) => (
                <option key={index} label={option} value={option}></option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default NewItem;
