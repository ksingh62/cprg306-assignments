import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCollectionRef = collection(db, "users", userId, "items");
  const q = query(itemsCollectionRef);
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

export async function addItem(userId, item) {
  const itemsCollectionRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollectionRef, item);
  return docRef.id; // Return the ID of the newly added item
}

export async function deleteItem(userId, itemId) {
    await deleteDoc(doc(db, "users", userId, "items", itemId));
  }