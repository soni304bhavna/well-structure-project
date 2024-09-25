import { ApiSlice } from "../../apiSlice";

export const authSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    AddMeal: builder.mutation({
      query: (body) => ({
        url: "meal/add-meal",
        method: "POST",
        body,
      }),
    }),
    // ListingMeal: builder.query({
    //   query: () => ({
    //     url: `/meal/get-meals/${date}`,
    //     // method:'GET',
    //     // body
    //   }),
    // }),
    
    
  }),
});

export const {
  useAddMealMutation,
//   useListingMealQuery,
  
} = authSlice;
