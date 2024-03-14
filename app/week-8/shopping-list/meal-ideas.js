"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

const fetchMealDetails = async (mealId) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  return data.meals && data.meals[0];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);
  const [isDefault, setIsDefault] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = (index, mealId) => {
    setActiveItem(index === activeItem ? null : index);

    if (index !== activeItem) {
      fetchMealDetails(mealId).then((details) => setMealDetails(details));
    }
  };

  const loadMealIdeas = async () => {
    setIsDefault(true);
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);

    setMealDetails(null);
    setActiveItem(null);
    setIsDefault(false);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
      setMealDetails(null);
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Meal Ideas</h2>
      {!ingredient ? (
        <p>Select an item to see meal ideas</p>
      ) : meals.length > 0 ? (
        <p>Here are some meal ideas using {ingredient.trim()}: </p>
      ) : (
        <p>No meals found for {ingredient}</p>
      )}

      <div>
        <ul>
          {meals.map((meal, index) => (
            <li
              onClick={() => toggleMenu(index, meal.idMeal)}
              key={meal.idMeal}
              className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-sky-700 cursor-pointer w-full"
            >
              {meal.strMeal}

              {activeItem === index && mealDetails && (
                <div className="text-xs text-gray-300 ml-2">
                  <p>Ingredients needed:</p>
                  <ul>
                    {Object.keys(mealDetails).map((key) => {
                      if (key.startsWith("strIngredient") && mealDetails[key]) {
                        const measureKey = `strMeasure${key.slice(13)}`;
                        return (
                          <li className="text-xs ml-6 text-gray-300" key={key}>
                            {mealDetails[key] && mealDetails[measureKey] && (
                              <p>
                                {`
                                  ${mealDetails[key]} (${mealDetails[measureKey]})`}
                              </p>
                            )}
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
