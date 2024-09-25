import React from 'react';
import CategogyFormLayouts from '../Layouts/CategoryFormLayouts.tsx';
import { Formik ,Form } from 'formik';
import {object, string} from "yup"
import { useAddCategoryMutation } from '../slices/authSlice.ts';

const AddCategoryWrapper = () => {
    const [AddCategory]=useAddCategoryMutation();
    const initialValues = {
        categoryName:"",
        // cal:""
        // protein:""
        // carbs:""
        // Fat:""
    }
    // values.categoryName

    const handleSubmit=async(values:any,)=>{
        AddCategory(values).then((res)=>{

           console.log(res);
        }) 
    }

    const validationSchema = object({
        categoryName: string().required(" Category Name is required"),
        // cal: string().required("Cal is required")
        // protein: string().required("Protein is required")
        // Carbs: string().required("Carbs is required")
        // Fat: string().required("Fat is required")
    })

return(
    <Formik initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={handleSubmit} 
    // resetForm
    >
        {
            (formikProps)=>{
                return(
                    <Form>
                        <CategogyFormLayouts formikProps={formikProps}/>
                    </Form>
                )
            }
        }
    </Formik>
)
}
export default AddCategoryWrapper;
