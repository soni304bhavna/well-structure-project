import { ApiSlice } from "../../apiSlice";



export const authSlice = ApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query: (body)=>({
                url:'user/login',
                method:'POST',
                body
            })
        })
    })
})

export const{
    useLoginMutation
} =authSlice