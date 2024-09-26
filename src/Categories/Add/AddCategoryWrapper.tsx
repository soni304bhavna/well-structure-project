import React from 'react';
import CategogyFormLayouts from '../Layouts/CategoryFormLayouts.tsx';
import { Formik ,Form } from 'formik';
import {object, string} from "yup"
import { useAddCategoryMutation } from '../slices/authSlice.ts';
import { useNavigate } from 'react-router-dom';

const AddCategoryWrapper = () => {
    const [AddCategory]=useAddCategoryMutation();
    const navigate = useNavigate();
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
            navigate("/categories/listing")
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
