"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, firebaseSignOut } = useUserAuth();

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

  if (user) {
    return (
      <main className="bg-slate-950 text-white m-2 p-2 flex">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Shopping List</h1>

          <button onClick={firebaseSignOut} className="border-2 border-sky-500 rounded p-1 px-3 hover:bg-sky-500">Sign out</button>
          <NewItem onAddItem={handleAddItem}></NewItem>
          <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
        </div>

        <div className="flex-1 max-w-sm m-2 mt-16">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    );
  } else {
    return (
      <div>
        <p>You need to be signed in to access the Shopping List.</p>
        <p className="hover:underline"><Link href="/week-8">Sign in on this page </Link></p>
      </div>
    );
  }
}

export default Page;
