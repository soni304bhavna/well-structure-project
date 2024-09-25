import React from 'react';

const NutritionalSummary = ({ meals }) => {
  const totalCalories = meals.reduce((acc, meal) => acc + parseFloat(meal.calories), 0);
  const totalProtein = meals.reduce((acc, meal) => acc + parseFloat(meal.protein), 0);
  const totalCarbs = meals.reduce((acc, meal) => acc + parseFloat(meal.carbs), 0);
  const totalFat = meals.reduce((acc, meal) => acc + parseFloat(meal.fat), 0);

  // mt-6 bg-white p-6 rounded shadow-md
  return (
    <div className="mt-6 bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Nutritional Summary</h2>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="text-lg">
          <strong>Total Calories:</strong> {totalCalories} kcal
        </div>
        <div className="text-lg">
          <strong>Total Protein:</strong> {totalProtein} g
        </div>
        <div className="text-lg">
          <strong>Total Carbs:</strong> {totalCarbs} g
        </div>
        <div className="text-lg">
          <strong>Total Fat:</strong> {totalFat} g
        </div>
      </div>
    </div>
  );
};

export default NutritionalSummary;
