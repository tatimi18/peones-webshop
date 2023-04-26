import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shoppingCartList: [],
    amount: 0
};

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.shoppingCartList.push(action.payload)
        },

        addPrice(state, action) {
            state.amount += action.payload
        },

        removeFromCart(state, action) {
            state.shoppingCartList = state.shoppingCartList.filter(item => item.name_en !== action.payload)
        },

        removePrice(state, action) {
            state.amount -= action.payload
        }
        
    }
})

export const {addToCart, removeFromCart, addPrice, removePrice} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;