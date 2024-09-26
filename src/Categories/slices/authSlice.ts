import { ApiSlice } from "../../apiSlice";

export const authSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    AddCategory: builder.mutation({
      query: (body) => ({
        url: "category/add-category",
        method: "POST",
        body,

      }),
      invalidatesTags:["category"]
    }),
    ListingCategory: builder.query({
      query: () => ({
        url: "category/get-category",
        // method:'GET',
        // body
      }),
      providesTags:["category","edit","delete"]
    }),
    EditCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/category/update-category/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags:["edit"]
    }),
    CategoryById: builder.query({
      query: (id ) => ({
        url: `/category/get-category-by-id/${id}`,
        method: "GET",
        
      }),
    }),
    DeleteCategory: builder.mutation({
      query: (id) => ({
        url: `category/delete-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["delete"]
    }),


    
  }),
});

export const {
  useAddCategoryMutation,
  useListingCategoryQuery,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useCategoryByIdQuery,
} = authSlice;
