import CategogyFormLayouts from '../Layouts/CategoryFormLayouts.tsx';
import { Formik ,Form } from 'formik';
import {object, string} from "yup"
import { useEditCategoryMutation } from '../slices/authSlice.ts';
import { useNavigate, useParams } from 'react-router-dom';
import {useCategoryByIdQuery} from '../slices/authSlice.ts';
import { toast } from 'react-toastify';


const EditCategoryWrapper = () => {
    const navigate = useNavigate()
    const [EditCategory] =useEditCategoryMutation();

    const {id} = useParams();
    const {data,isLoading,error}=useCategoryByIdQuery(id);
    // console.log(data);
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error loading category data</p>
    
    const initialValues  = {
        categoryName:data?.data.categoryName || "",
        
    }

    const handleSubmit=async(values:any)=>{
        const data = values;

        EditCategory({data,id}).then((res:any)=>{
           if(res.data){
            toast(res.msg)
            navigate("/categories/listing")
           }
        }) 
    }

    const validationSchema = object({
        categoryName: string().required(" Category Name is required"),
       
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
                        <CategogyFormLayouts 
                        // heading ={'Edit Customer'}
                        // buttonName = {"update"}
                        formikProps={formikProps}/>
                    </Form>
                )
            }
        }
    </Formik>
)
}
export default EditCategoryWrapper;

