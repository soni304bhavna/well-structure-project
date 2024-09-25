import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../Component/Atoms/InputField/ATMTextField/ATMTextField';
import ATMPasswordField from '../Component/Atoms/InputField/ATMPasswordField/ATMPassword';
import ATMSubmitButton from '../Component/Atoms/Button/ATMSubmitButton/ATMSubmitButton';

type Props = {
    formikProps : FormikProps<any>
}

const Login = ({formikProps}:Props) => {

    const {values,setFieldValue,isSubmitting,resetForm}=formikProps

    
    
    return ( <div className = " flex justify-center h-screen items-center ">
        <div className=" p-4 flex flex-col space-y-4 w-[400px] border shadow-2xl  bg-slate-200 rounded" >
            {/**Email Input*/}
            <ATMTextField 
            label='Email'
            className =" font-bold font-mono p-2 border rounded border-gray-400" 
            name="email" 
            value={values.email}
            placeholder="Enter Email" 
            onChange={(e)=>{setFieldValue("email",e.target.value)}}
            />
            < p className='text-red-600'><ErrorMessage name='email'/></p>

            {/**Password Input*/}
            <ATMPasswordField 
            className ="font-bold font-mono p-2 border rounded border-gray-400"
            label='Password'
             name="password" 
             value={values.password }
             placeholder="Enter Password" 
             onChange={(e)=>{setFieldValue("password",e.target.value)}}
             />
             <p className='text-red-600'><ErrorMessage name='password'/></p>

            {/*Submit Button **/}
            {/* {isSubmitting?"Submitting...":"Submit"} */}
             <ATMSubmitButton
             className='p-2 bg-blue-950 font-mono text-white'
             />
        </div>
        </div>
    );
}

export default Login;
