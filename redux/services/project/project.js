import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'
import config from '../../../../config';

function isHydrateAction(action) {
    return action.type === HYDRATE
}

export const projectAPI = createApi({
    reducerPath: 'projectAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.backendUrl}/project`,
        
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getProjectAll: builder.query({
            query: () => 'projects',
            tagTypes: ['Project'],
            headers: {
                'Accept': 'application/json',
            },
        }),
        getSlugProject: builder.query({
            query: (slug) => `projects?slug=${slug}`,
            tagTypes: ['Project'],
            headers: {
                'Accept': 'application/json',
            },
        }),

        getProject: builder.query({
            query: (language) => `projects?language=${language}`,
            tagTypes: ['Project'],
            headers: {
                'Accept': 'application/json',
            },
        }),
    }),
});
export const { useGetProjectQuery, useGetProjectAllQuery, useGetSlugProjectQuery} = projectAPI;