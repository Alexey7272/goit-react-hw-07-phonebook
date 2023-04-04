import {configureStore} from '@reduxjs/toolkit';
// , combineReducers 
// import { contactReducer } from './contact/slice'
// import { filterReducer } from './filter/slice';
// import {contactApi} from './contacts/contactSlice';

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
    }), 
});

