import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../Component/Atoms/InputField/ATMTextField/ATMTextField';
import ATMSubmitButton from '../../Component/Atoms/Button/ATMSubmitButton/ATMSubmitButton';

type Props = {
    formikProps : FormikProps<any>
}

const  CategoryFormLayoutsWrapper = ({formikProps}:Props) => {

    const {values,isSubmitting,resetForm,handleChange}=formikProps

    // console.log(values);
    
    return ( <div className = " flex justify-center h-screen items-center ">
        <div className=" p-4 flex flex-col space-y-4 w-[800px] border shadow-2xl  bg-slate-200 rounded" >
            {/**Category Name Input*/}
            <ATMTextField
            label='Category Name'
            className='font-bold font-mono p-2 border rounded border-gray-400'
            name='categoryName'
            value={values.categoryName}
            placeholder="Enter Category Name" 
            onChange={handleChange}

            />
            < p className='text-red-600'><ErrorMessage name='categoryName'/></p>

        
            {/*Submit Button **/}
             {/* {isSubmitting?"Submitting...":"Submit"} */}
             
             <ATMSubmitButton
             className='p-2 bg-blue-950 font-mono text-white'
             />
        </div>
        </div>
    );
}

export default CategoryFormLayoutsWrapper;
