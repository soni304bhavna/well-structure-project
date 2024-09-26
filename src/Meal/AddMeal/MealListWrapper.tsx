import React from 'react';

const MealList = ({ meals, deleteMeal }) => {



  
  return (
    <div className="mt-6 bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Meal List</h2>
      {meals.length > 0 ? (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li key={meal.id} className="bg-white p-4 rounded shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{meal.name}</h3>
                <p className="text-gray-700">Calories: {meal.calories} kcal</p>
                <p className="text-gray-700">Protein: {meal.protein} g | Carbs: {meal.carbs} g | Fat: {meal.fat} g</p>
              </div>
              <div>
                <button
                  onClick={() => deleteMeal(meal.id)}
                  className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (<>
        <p className="text-gray-700">No meals added yet.
          
        </p>
        {/* <button className="mt-2 w-50% bg-blue-600 text-white py-1 rounded-md hover:bg-blue-700"
        >Add Meal</button> */}
        </>
      )}
    </div>
  );
};

export default MealList;
