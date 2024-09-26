import { ErrorMessage, FormikProps } from "formik";
import ATMTextField from "../../Component/Atoms/InputField/ATMTextField/ATMTextField";
import ATMSubmitButton from "../../Component/Atoms/Button/ATMSubmitButton/ATMSubmitButton";
import ATMNumberField from "../../Component/Atoms/InputField/ATMNumberField/ATMNumberField";
import ATMCheckBox from "../../Component/Atoms/InputField/ATMCheckBox/ATMCheckBox";

type Props = {
  formikProps: FormikProps<any>;
};

const MealFormLayouts = ({ formikProps }: Props) => {
  const {resetForm } = formikProps;

  // console.log(values);

  return (
    <>
     <h2 className="text-2xl font-bold mb-4">Add New Meal</h2>
              
              <div className="mb-4">
                <h3 className="font-semibold">Select Meal Type:</h3>
                <ATMCheckBox
                  id={"breakfast"}
                  name={"breakfast"}
                  // checked={mealType.breakfast}
                  // onChange={handleCheckboxChange}
                  label={"Breakfast"}
                />
                <ATMCheckBox
                  id="lunch"
                  name="lunch"
                  // checked={mealType.lunch}
                  // onChange={handleCheckboxChange}
                  label="Lunch"
                />
                <ATMCheckBox
                  id="dinner"
                  name="dinner"
                  // checked={mealType.dinner}
                  // onChange={handleCheckboxChange}
                  label="Dinner"
                />
              </div>

              {/* Input fields for meal details */}
              <ATMTextField
                // name="mealName"
                label="Meal Name"
                placeholder="Enter meal name"
                {...formikProps.getFieldProps('mealName')} // Pass Formik props
              />
              <ATMNumberField
                // name="cal"
                label="Calories"
                placeholder="Enter calories"
                {...formikProps.getFieldProps('cal')} // Pass Formik props
              />
              <ATMNumberField
                // name="protein"
                label="Protein"
                placeholder="Enter protein"
                {...formikProps.getFieldProps('protein')} // Pass Formik props
              />
              <ATMNumberField
                // name="carbs"
                label="Carbs"
                placeholder="Enter carbs"
                {...formikProps.getFieldProps('carbs')} // Pass Formik props
              />
              <ATMNumberField
                // name={"fat"}
                label={"Fat"}
                placeholder={"Enter fat"}
                {...formikProps.getFieldProps('fat')} // Pass Formik props
              />

              <ATMSubmitButton  
             className='p-2 bg-blue-950 font-mono text-white'
             />
              {/* disabled={isLoading} */}
                {/* {isLoading ? 'Adding Meal...' : 'Add Meal'} */}
              


      </>

    // </form>
  );
};

export default MealFormLayouts;
