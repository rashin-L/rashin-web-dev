import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { HYDRATE } from 'next-redux-wrapper'
import config from '../../../../config';

// function isHydrateAction(action) {
//     return action.type === HYDRATE
// }


export const contactPostAPI = createApi({
    reducerPath: 'contactPostAPI',
    baseQuery: fetchBaseQuery({ baseUrl:config.backendUrl }),
    // extractRehydrationInfo(action, { reducerPath }) {
    //     if (isHydrateAction(action)) {
    //         return action.payload[reducerPath]
    //     }
    // },
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

