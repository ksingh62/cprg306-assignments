"use client";
import { useState } from "react";
import Item from "./item";

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    } else if (sortBy === "groupedCategory") {
      return a.category.charAt(0).localeCompare(b.category.charAt(0)) || a.name.localeCompare(b.name);
    }
    return 0;
  });

  // console.log(sortedItems);

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  //   console.log(groupedItems);

  return (
    <main>
      <div className="flex gap-3 items-center">
        <p>Sort By: </p>
        <button
          onClick={() => setSortBy("name")}
          className={`${
            sortBy === "name" ? "bg-sky-500 font-bold" : "bg-sky-700"
          } border rounded p-1 px-3`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${
            sortBy === "category" ? "bg-sky-500 font-bold" : "bg-sky-700"
          } border rounded p-1 px-3`}
        >
          Category
        </button>

        <button
          onClick={() => setSortBy("groupedCategory")}
          className={`${
            sortBy === "groupedCategory" ? "bg-sky-500 font-bold" : "bg-sky-700"
          } border rounded p-1 px-3`}
        >
          Grouped Category
        </button>
      </div>

      <ul>
        {sortBy === "groupedCategory"
          ? Object.entries(groupedItems).map(([category, items]) => (
              <div key={category}>
                <h2 className="capitalize text-xl mt-4">{category}</h2>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      <Item key={index} {...item}></Item>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : sortedItems.map((item, index) => (
              <li key={index}>
                <Item key={index} {...item}></Item>
              </li>
            ))}
      </ul>
    </main>
  );
}

export default ItemList;
