import { ErrorMessage, FormikProps } from "formik";
import ATMTextField from "../../Component/Atoms/InputField/ATMTextField/ATMTextField";
import ATMSubmitButton from "../../Component/Atoms/Button/ATMSubmitButton/ATMSubmitButton";
import ATMNumberField from "../../Component/Atoms/InputField/ATMNumberField/ATMNumberField";
import ATMCheckBox from "../../Component/Atoms/InputField/ATMCheckBox/ATMCheckBox";

type Props = {
  formikProps: FormikProps<any>;
};

const MealFormLayoutsWrapper = ({ formikProps }: Props) => {
  const { values, isSubmitting, resetForm, handleChange, } = formikProps;

  // console.log(values);

  return (
    <>
    {/* <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto gap-6"> */}
      <h2 className="text-2xl font-bold mb-4">Add New Meal</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Select Meal Type:</h3>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="breakfast"
            name="breakfast"
            // checked={mealType.breakfast}
            // onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="breakfast">Breakfast</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="lunch"
            name="lunch"
            // checked={mealType.lunch}
            // onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="lunch">Lunch</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="dinner"
            name="dinner"
            // checked={mealType.dinner}
            // onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="dinner">Dinner</label>
        </div>
      </div>
      {/* Input fields for meal details */}
       <div className=" flex justify-center h-screen items-center ">
      <div className=" p-4 flex flex-col space-y-4 w-[800px] border shadow-2xl  bg-slate-200 rounded">
       {/* {label && <label className="font-bold text-blue-950 font-mono">{"Breakfast"}</label>}  */}
         {/* <ATMCheckBox
              id={"breakfast"}
              name={"breakfast"}
              checked={mealType.breakfast}
              onChange={handleCheckboxChange}
              className={`p-2 border rounded border-gray-400 ${className}`}
        />  */}
         {/* <div className="flex flex-col space-y-2"> */}
   



        {/**Meal Name Input*/}
        <ATMTextField
          label="Meal Name"
          className="font-bold font-mono p-2 border rounded border-gray-400"
          name="mealName"
          value={values.mealName}
          placeholder="Enter Meal Name"
          onChange={handleChange}
        />
        <p className="text-red-600">
          <ErrorMessage name="mealName" />
        </p>
        {/**Meal Name Input*/}
        <ATMNumberField
          label="Calories"
          className="font-bold font-mono p-2 border rounded border-gray-400"
          name="calories"
          value={values.calories}
          placeholder="Calories"
          onChange={handleChange}
          //       value={meal.calories}
          //       className="w-full p-2 border border-gray-300 rounded mt-2"
        />
        <p className="text-red-600">
          <ErrorMessage name="calories" />
        </p>
        {/**Meal Name Input*/}
        <ATMNumberField
          label="Protein"
          className="font-bold font-mono p-2 border rounded border-gray-400"
          name="protein"
          value={values.protein}
          placeholder="Protein"
          onChange={handleChange}
          //       value={meal.calories}
          //       className="w-full p-2 border border-gray-300 rounded mt-2"
        />
        <p className="text-red-600">
          <ErrorMessage name="calories" />
        </p>
        {/**Meal Name Input*/}
        <ATMNumberField
          label="Carbs"
          className="font-bold font-mono p-2 border rounded border-gray-400"
          name="carbs"
          value={values.carbs}
          placeholder="Carbs"
          onChange={handleChange}
          //       value={meal.calories}
          //       className="w-full p-2 border border-gray-300 rounded mt-2"
        />
        <p className="text-red-600">
          <ErrorMessage name="calories" />
        </p>
        {/**Meal Name Input*/}
        <ATMNumberField
          label="Fat"
          className="font-bold font-mono p-2 border rounded border-gray-400"
          name="fat"
          value={values.fat}
          placeholder="Fat"
          onChange={handleChange}
          //       value={meal.calories}
          //       className="w-full p-2 border border-gray-300 rounded mt-2"
        />
        <p className="text-red-600">
          <ErrorMessage name="fat" />
        </p>

        {/*Submit Button **/}
        {/* {isSubmitting?"Submitting...":"Submit"} */}

        <ATMSubmitButton className="p-2 bg-blue-950 font-mono text-white" />
      </div>
    </div>


      </>

    // </form>
  );
};

export default MealFormLayoutsWrapper;
