"use client";
import { useState, useEffect } from "react";


const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMeals = async () => {
    if (!ingredient) {
      return;
    }
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMeals();
  }, [ingredient])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <p>Here are some meal ideas using {ingredient}</p>
      <div>
        <ul>
          {meals.map((meal) => (
            <li className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

