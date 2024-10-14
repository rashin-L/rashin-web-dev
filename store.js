import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { infoAPI } from './redux/services/main/about';
import { projectAPI } from './redux/services/project/project';
import { skillAPI } from './redux/services/skill/skill';
import { contactPostAPI } from './redux/services/main/contact';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootReducer = combineReducers({
    [infoAPI.reducerPath]: infoAPI.reducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [skillAPI.reducerPath]: skillAPI.reducer,
    [contactPostAPI.reducerPath]: contactPostAPI.reducer,
});


const middleware = (getDefaultMiddleware) => { 
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
        infoAPI.middleware,
        projectAPI.middleware,
        skillAPI.middleware,
        contactPostAPI.middleware
    );
};

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

// setupListeners(store.dispatch);
const persistor = persistStore(store);
const { dispatch } = store;

export { store, persistor, dispatch }; 

// export default store;