import { createApi, fetchBaseQuery, QueryDefinition } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'

function isHydrateAction(action) {
    return action.type === HYDRATE
}
export const infoAPI = createApi({
    reducerPath: 'infoAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000',

    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getInfo: builder.query({
            query: () => 'info',
            tagTypes: ['Info'],
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': "http://localhost:3000",
            },
        }),
        getAbout: builder.query({
            query: () => 'about',
            tagTypes: ['about'],
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': "http://localhost:3000",
            },
        }),
        getSocial: builder.query({
            query: () => 'social',
            tagTypes: ['social'],
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': "http://localhost:3000",
            },
        }),
    }),
});
// console.log(`http://127.0.0.1:8000/info`);
export const { useGetInfoQuery, useGetAboutQuery, useGetSocialQuery } = infoAPI;