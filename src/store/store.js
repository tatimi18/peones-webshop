import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import catalogReducer from './slices/catalogSlice';
import shoppingCartReduser from "./slices/shoppingCartSlice";


export const store = configureStore({
    reducer: combineReducers({
        catalog: catalogReducer,
        shoppingCart: shoppingCartReduser
    })
})