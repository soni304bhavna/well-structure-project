import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const ApiSlice = createApi({
    reducerPath: 'apiSlice',
    
    baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.21:3005",
  }),
  endpoints:(builder) =>({
    
  })
  

    
})

// http://192.168.1.21:3005

