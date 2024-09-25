import { useNavigate } from 'react-router-dom';
import { useListingCategoryQuery } from '../slices/authSlice.ts';
import { useDeleteCategoryMutation } from '../slices/authSlice.ts';
import { useEditCategoryMutation } from '../slices/authSlice.ts';
import CategoryListing from './CategoryListing.tsx';

const CategoryListingWrapper = () => {
  // Fetch data from the API using RTK Query
  const  {data,isLoading,isError} = useListingCategoryQuery();
  const  [deleteData] = useDeleteCategoryMutation();

  const navigate = useNavigate()

  // Extract the data once fetched from the API
const handleEdit=(id)=>{
  console.log("handle edit called");
  console.log(id);
  navigate(`/categories/edit/${id}`)

}
const handleDelete=(id:any)=>{
  // console.log("handle delete called");
  deleteData(id).then((res)=>{
    console.log(res);
   
  })

}

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading data</div>;
  }

  return (
    <>
    <CategoryListing  
    data ={data}
    isError={isError}
    isLoading={isLoading}
    handleDelete={handleDelete}
    handleEdit={handleEdit}
    />
    </>
  );
};

export default CategoryListingWrapper;

