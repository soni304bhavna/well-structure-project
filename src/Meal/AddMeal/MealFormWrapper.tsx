import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { useAddMealMutation } from '../slices/authSlice'; // Import the mutation hook
import { toast } from 'react-toastify';
import MealFormLayouts from '../Layouts/MealFormLayouts';


const validationSchema = object({
  categoryName: string().required('Meal Name is required'),
  cal: string().required('Cal is required'),
  protein: string().required('Protein is required'),
  carbs: string().required('Carbs is required'),
  fat: string().required('Fat is required')
});

const initialValues = {
  categoryName: '',
  cal: '',
  protein: '',
  carbs: '',
  fat: '',
  mealType: {
    breakfast: false,
    lunch: false,
    dinner: false,
  }
};

const MealFormWrapper = () => {
  const [mealType, setMealType] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  const [AddMeal, { isLoading }] = useAddMealMutation(); // Hook to call the mutation

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setMealType((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (values:any) => {
    const response = await AddMeal(values); // Call the mutation
    try {
      const mealData = { ...values, mealType }; // Include mealType in the meal data
      console.log(mealData);
      console.log(response);
      toast.success("Meal added successfully!", { position: "bottom-right" });

      // Reset form after submission
    } catch (error) {
      toast.error("Failed to add meal! Please try again.", { position: "bottom-right" });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        return (
          <Form>
            <MealFormLayouts formikProps={formikProps}
            />
             
          </Form>
        );
      }}
    </Formik>
  );
};

export default MealFormWrapper;
