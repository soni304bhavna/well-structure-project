import React from 'react';
import Login from './Login.tsx';
import { Formik ,Form } from 'formik';
import {object, string} from "yup"
import { useLoginMutation } from './slices/authSlice.ts';
import { useNavigate } from 'react-router-dom';

const LoginWrapper = () => {
const  navigate = useNavigate();
    const [login]=useLoginMutation();
    const initialValues = {
        email:"",
        password:""
    }

    const handleSubmit=async(values:any,)=>{
        login(values).then((res)=>{
          const token = res.data.data.token;
          const status = res.data.status;
            if(token&&status){
               console.log("OK");
               navigate('/categories/listing')
            }
            // console.log(res);
            // console.log(res.data);
            // console.log(res.data.data);
           
        }) 
    }

    const validationSchema = object({
        email: string().email().required("Please enter email"),
        password: string().required("Please enter password")
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
                        <Login formikProps={formikProps}/>
                    </Form>
                )
            }
        }
    </Formik>
)
}
export default LoginWrapper;
