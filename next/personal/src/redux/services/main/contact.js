import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'

function isHydrateAction(action) {
    return action.type === HYDRATE
}


export const contactPostAPI = createApi({
    reducerPath: 'contactPostAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        createContactPost: builder.mutation({
            query: (newContactPost) => ({
                url: 'contact',
                method: 'POST',
                tagTypes: ['contactPosts',],
                body: newContactPost,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },  
            }),
            invalidatesTags: ['contactPosts'],
            
        }),
        


    })
})
export const {useCreateContactPostMutation} = contactPostAPI;

