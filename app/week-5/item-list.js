"use client";
import { useState } from "react";
import items from "./items.json";
import Item from "./item";

function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  console.log(sortedItems);

  return (
    <>
      <div className="flex gap-2 items-center">
        <p>Sort By: </p>
        <button
          onClick={() => setSortBy("name")}
          className={`bg-${
            sortBy === "name" ? "green" : "slate"
          }-800 border rounded p-2 font-bold`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`bg-${
            sortBy === "category" ? "green" : "slate"
          }-800 border rounded p-2`}
        >
          Category
        </button>
        
      </div>

      <ul>
        {items.map((item, index) => (
          <Item key={index} {...item}></Item>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
