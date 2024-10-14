import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'
import config from '../../../../config';

function isHydrateAction(action) {
    return action.type === HYDRATE
}
export const seoAPI = createApi({
    reducerPath: 'seoAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: config.backendUrl,

    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        seoInfo: builder.query({
            query: () => `seo`,
            tagTypes: ['seo'],
            headers: {
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': "https://api.rashin-web-dev.com",
            },
        }),
    }),
});
// console.log(`https://api.rashin-web-dev.com/info`);
export const { useSeoInfoQuery } = seoAPI;
