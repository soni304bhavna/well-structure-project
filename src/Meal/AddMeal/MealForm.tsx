import React, { useState } from 'react';
import { Formik ,Form } from 'formik';
import {object, string} from "yup"
import { useAddMealMutation } from "../slices/authSlice"; // Import the mutation hook
import { toast } from "react-toastify";
import MealFormLayoutsWrapper from '../Layouts/MealFormLayoutsWrapper';


const validationSchema = object({
    categoryName: string().required(" Meal Name is required"),
    cal: string().required("Cal is required"),
    protein: string().required("Protein is required"),
    Carbs: string().required("Carbs is required"),
    Fat: string().required("Fat is required")
})
const initialValues = {
    categoryName:"",
    cal:"",
    protein:"",
    carbs:"",
    Fat:""
}



const MealForm = () => {
  const [meal, setMeal] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  });
  const [mealType, setMealType] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  const [ AddMeal, { isLoading }] = useAddMealMutation(); // Hook to call the mutation
  const [errors, setErrors] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({ ...meal, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setMealType((prev) => ({ ...prev, [name]: checked }));
  };


//   const handleSubmit=async(values:any,)=>{
//     AddMeal(values).then((res)=>{

//        console.log(res);
//     }) 
// }
  

  const handleSubmit = async (values:any) => {
    const response = await AddMeal(mealData); // Call the mutation
   
      try {
        const mealData = { ...meal, mealType };
        console.log(mealData);
        console.log(response);
        toast.success("Meal added successfully!",response, { position: "bottom-right" });

        // Reset form after submission
        setMeal({ name: '', calories: '', protein: '', carbs: '', fat: '' });
        setMealType({ breakfast: false, lunch: false, dinner: false });

      } catch (error) {
        toast.error("Failed to add meal! Please try again.", { position: "bottom-right" });
      }
   
  };

  return (
    <Formik initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={handleSubmit} 
    // resetForm
    >
        {
            (formikProps)=>{
                return(
                    <Form>
                        <MealFormLayoutsWrapper formikProps={formikProps}/>
                    </Form>
                )
            }
        }
    </Formik>
    // <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto gap-6">
    //   <h2 className="text-2xl font-bold mb-4">Add New Meal</h2>
    //   <div className="mb-4">
    //     <h3 className="font-semibold">Select Meal Type:</h3>
    //     <div className="flex items-center mb-2">
    //       <input
    //         type="checkbox"
    //         id="breakfast"
    //         name="breakfast"
    //         checked={mealType.breakfast}
    //         onChange={handleCheckboxChange}
    //         className="mr-2"
    //       />
    //       <label htmlFor="breakfast">Breakfast</label>
    //     </div>
    //     <div className="flex items-center mb-2">
    //       <input
    //         type="checkbox"
    //         id="lunch"
    //         name="lunch"
    //         checked={mealType.lunch}
    //         onChange={handleCheckboxChange}
    //         className="mr-2"
    //       />
    //       <label htmlFor="lunch">Lunch</label>
    //     </div>
    //     <div className="flex items-center">
    //       <input
    //         type="checkbox"
    //         id="dinner"
    //         name="dinner"
    //         checked={mealType.dinner}
    //         onChange={handleCheckboxChange}
    //         className="mr-2"
    //       />
    //       <label htmlFor="dinner">Dinner</label>
    //     </div>
    //   </div>

    //   {/* Input fields for meal details */}
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Meal Name</label>
    //     <input
    //       type="text"
    //       name="name"
    //       value={meal.name}
    //       onChange={handleChange}
    //       className="w-full p-2 border border-gray-300 rounded mt-2"
    //     />
    //     {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
    //   </div>

    //   <div className="mb-4">
    //     <label className="block text-gray-700">Calories</label>
    //     <input
    //       type="number"
    //       min="0"
    //       name="calories"
    //       value={meal.calories}
    //       onChange={handleChange}
    //       className="w-full p-2 border border-gray-300 rounded mt-2"
    //     />
    //     {errors.calories && <p className="text-red-500 text-sm">{errors.calories}</p>}
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Protein</label>
    //     <input
    //       type="number"
    //       min="0"
    //       name="protein"
    //       value={meal.protein}
    //       onChange={handleChange}
    //       className="w-full p-2 border border-gray-300 rounded mt-2"
    //     />
    //     {errors.protein && <p className="text-red-500 text-sm">{errors.calories}</p>}
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Carbs</label>
    //     <input
    //       type="number"
    //       min="0"
    //       name="carbs"
    //       value={meal.carbs}
    //       onChange={handleChange}
    //       className="w-full p-2 border border-gray-300 rounded mt-2"
    //     />
    //     {errors.carbs && <p className="text-red-500 text-sm">{errors.calories}</p>}
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Fat</label>
    //     <input
    //       type="number"
    //       min="0"
    //       name="fat"
    //       value={meal.fat}
    //       onChange={handleChange}
    //       className="w-full p-2 border border-gray-300 rounded mt-2"
    //     />
    //     {errors.fat && <p className="text-red-500 text-sm">{errors.calories}</p>}
    //   </div>

    //   {/* Repeat for protein, carbs, fat... */}

    //   <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded" disabled={isLoading}>
    //     {isLoading ? 'Adding Meal...' : 'Add Meal'}
    //   </button>
    // </form>
  );
};

export default MealForm;
