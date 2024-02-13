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
    else if (sortBy === "groupedCategory") {
        return a.category.charAt(0).localeCompare(b.category.charAt(0));
      }
    return 0;
  });

  //   console.log(sortedItems);

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

        <button
          onClick={() => setSortBy("groupedCategory")}
          className={`bg-${
            sortBy === "group" ? "green" : "slate"
          }-800 border rounded p-2`}
        >
          Grouped Category
        </button>
      </div>

      <ul>
        {sortBy === "groupedCategory"
          ? (Object.entries(groupedItems).map(([category, items]) => (
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
            )))
          : (sortedItems.map((item, index) => (
              <li key={index}>
                <Item key={index} {...item}></Item>
              </li>
            )))}
      </ul>
    </main>
  );
}

export default ItemList;
