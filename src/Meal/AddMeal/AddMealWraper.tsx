import React, { useState } from "react";
import MealFormWrapper from "./MealFormWrapper";
import MealListWrapper from "./MealListWrapper";
import NutritionalSummaryWrapper from "./NutritionalSummaryWrapper";
import "react-calendar/dist/Calendar.css"; // Import the calendar CSS for default styling

const AddMeal = () => {
  const [meals, setMeals] = useState([]);

  const addMeal = (meal) => {
    setMeals([...meals, { ...meal, id: Date.now() }]);
  };

  const deleteMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h2 className=" text-2xl font-bold mb-4 ">Dashboard</h2> */}
      
    <div className="mt-6 bg-white p-6 rounded shadow-md flex gap-10">
      
      <div className="w-[300px]"><NutritionalSummaryWrapper meals={meals} /></div>
      <div className="w-[600px]"><MealFormWrapper addMeal={addMeal} /></div>
      <div className="w-[300px]"><MealListWrapper meals={meals} deleteMeal={deleteMeal} /></div>
    </div>
    </div>
  );
};

export default AddMeal;

