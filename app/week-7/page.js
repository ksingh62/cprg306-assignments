"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    let cleanedItemName = itemName.split(",")[0].trim();
    cleanedItemName = cleanedItemName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-slate-950 text-white m-2 p-2">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}></NewItem>
        <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
        <MealIdeas ingredient={selectedItemName}/>
      </div>
    </main>
  );
}

export default Page;
