import { ApiSlice } from "../../apiSlice";



export const authSlice = ApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        registration:builder.mutation({
            query: (body)=>({
                url:'user/registration',
                method:'POST',
                body
            })
        })
    })
})

export const{
    useRegistrationMutation
} =authSlice