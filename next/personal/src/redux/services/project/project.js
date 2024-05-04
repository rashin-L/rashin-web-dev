import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'

function isHydrateAction(action) {
    return action.type === HYDRATE
}

export const projectAPI = createApi({
    reducerPath: 'projectAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/project',
        
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getProject: builder.query({
            query: () => 'projects',
            tagTypes: ['Project'],
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': "http://localhost:3000",
            },
        }),
    
    }),
});
export const { useGetProjectQuery } = projectAPI;