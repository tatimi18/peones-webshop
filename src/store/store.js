import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import catalogReducer from './slices/catalogSlice'


export const store = configureStore({
    reducer: combineReducers({
        catalog: catalogReducer
    })
})