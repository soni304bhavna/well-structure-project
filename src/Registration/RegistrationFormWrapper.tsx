import React from 'react';
import Registration from './RegistrationForm.tsx';
import { Formik ,Form } from 'formik';
import {object, string, number } from "yup"
import { useRegistrationMutation } from './slices/authSlice.ts';



const RegistrationWrapper = () => {
    const [Registration]=useRegistrationMutation();
    const initialValues = {
        name: '',
        email: '',
        age: '',
        weight: '',
      };
    const handleSubmit=async(values:any,)=>{
        Registration(values).then((res)=>{

           console.log(res);
        }) 
    }

    const validationSchema1 = object({
        name: string().required('Name is required'),
        email: string().email('Invalid email format').required('Email is required'),
      });

      const validationSchema2 =object({
        age: number().required('Age is required').min(1, 'Age must be positive'),
        weight: number().required('Weight is required'),
      });

return(
    <Formik initialValues={initialValues} 
    validationSchema={[validationSchema1,validationSchema2]} 
    onSubmit={handleSubmit} 
    // resetForm
    >
        {
            (formikProps)=>{
                return(
                    <Form>
                        <RegistrationForm formikProps={formikProps}/>
                    </Form>
                )
            }
        }
    </Formik>
)
}
export default RegistrationWrapper ;
