import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import LoginWrapper from './Login/LoginWrapper';
import CategoryListingWrapper from '../src/Categories/List/CategoryListingWrapper';
import CategoryAddWrapper from '../src/Categories/Add/AddCategoryWrapper';
import RegistrationForm from './Registration/RegistrationFormWrapper';
import CategoryEditWrapper from '../src/Categories/Edit/EditCategoryWrapper';
import AddMealWraper from './Meal/AddMeal/AddMealWraper';

const PageRoute = () => {

    const route = createBrowserRouter([
        {
            path:'/',
            element:<> </>
        },
        {
            path:'/login',
            element:<> <LoginWrapper/></>
        },
        {
            path:'/registration',
            element:<> <RegistrationForm/></>
        },
        {
            path:'/categories/listing',
            element:<> <CategoryListingWrapper/></>
        },
        {
            path:'/categories/add',
            element:<> <CategoryAddWrapper/></>
        },
        {
            path:'/categories/edit',
            element:<CategoryEditWrapper/>
        },
        {
            path:`/categories/edit/:id`,
            element:<CategoryEditWrapper/> 
        },
        {   
            path:`meal/add-meal`,
            element:<AddMealWraper/>

        }
    ])
    return (
        <RouterProvider router={route}/>
    );
}

export default PageRoute;
