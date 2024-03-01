"use client";
import { useState, useEffect } from "react";

export default function MealIdeas( {ingredient} ) {
  const [meals, setMeals] = useState([]);

  function loadMealIdeas() {
    fetchMealIdeas(ingredient, setMeals);
  } 

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <p>Here are some meal ideas using {ingredient}</p>
      <div className="flex flex-wrap gap-4">
        {meals.map((meal) => (
          <div key={meal.id} className="w-1/2 md:w-1/3 lg:w-1/4">
            <p>{meal.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const fetchMealIdeas = async (ingredient, setMeals) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`
    );

    const data = await response.json();

    if(data.meals){
        const meals = data.meals.map((meal) => {
            return {
              id: meal.idMeal,
              name: meal.strMeal,
              image: meal.strMealThumb,
            };
          });
          setMeals(meals);
    }
    else{
        console.log("No meals found for the specified ingredient.");
        setMeals([]);  
    }

};
