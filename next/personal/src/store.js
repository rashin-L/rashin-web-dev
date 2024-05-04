import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { infoAPI } from './redux/services/main/about';
import { projectAPI } from './redux/services/project/project';
import { skillAPI } from './redux/services/skill/skill';
import { contactPostAPI } from './redux/services/main/contact';

const store = configureStore({
    reducer: {
        [infoAPI.reducerPath]: infoAPI.reducer,
        [projectAPI.reducerPath]: projectAPI.reducer,
        [skillAPI.reducerPath]: skillAPI.reducer,
        [contactPostAPI.reducerPath]: contactPostAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(infoAPI.middleware)
        .concat(projectAPI.middleware)
        .concat(skillAPI.middleware)
        .concat(contactPostAPI.middleware),

});

setupListeners(store.dispatch);

export default store;