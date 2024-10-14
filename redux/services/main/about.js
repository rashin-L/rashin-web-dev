import { createApi, fetchBaseQuery, QueryDefinition } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'
import config from '../../../../config';

function isHydrateAction(action) {
    return action.type === HYDRATE
}
export const infoAPI = createApi({
    reducerPath: 'infoAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: config.backendUrl,

    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getInfo: builder.query({
            query: (language) => `info?language=${language}`,
            tagTypes: ['Info'],
            headers: {
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': "https://api.rashin-web-dev.com",
            },
        }),
        getAbout: builder.query({
            query: (language) => `about?language=${language}`,
            tagTypes: ['about'],
            headers: {
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': "https://api.rashin-web-dev.com",
            },
        }),
        getSocial: builder.query({
            query: () => 'social',
            tagTypes: ['social'],
            headers: {
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': "https://api.rashin-web-dev.com",
            },
        }),
    }),
});
// console.log(`https://api.rashin-web-dev.com/info`);
export const { useGetInfoQuery, useGetAboutQuery, useGetSocialQuery } = infoAPI;
