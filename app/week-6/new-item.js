"use client";
import { useState } from "react";

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    function generateRandomId(length = 18) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    const item = {
      id: generateRandomId(),
      name,
      quantity,
      category,
    };

    onAddItem(item);
    console.log(item);

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
      <div className="w-full max-w-md bg-slate-800 text-black p-2 rounded-lg shadow-md mt-2 mb-8">
        <h3 className="text-xl font-bold text-white">Add New Item</h3>
        <form className="w-full mt-1" onSubmit={handleSubmit}>
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
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-bold"
          >
            +
          </button>
        </form>
      </div>
    </main>
  );
}

export default NewItem;
