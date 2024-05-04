import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'

function isHydrateAction(action) {
    return action.type === HYDRATE
}
export const skillAPI = createApi({
    reducerPath: 'skillAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/skill',
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getSkill: builder.query({
            query: () => 'skills/',
            tagTypes: ['Skill'],
        }),
    }),
});

export const { useGetSkillQuery } = skillAPI;

// skillAPI.endpoints.getSkill.initiate().then((response) => {
//     console.log(response.data);
// }).catch((error) => {
//     console.error(error);
// });