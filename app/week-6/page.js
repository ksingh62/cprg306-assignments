"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-slate-950 text-white mx-auto p-2">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem}></NewItem>
      <ItemList items={items}></ItemList>
    </main>
  );
}

export default Page;
