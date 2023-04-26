import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shoppingCartList: [],
    amount: 0,
    positions: 0
};

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = state.shoppingCartList.find(item => item.name_en === action.payload.name_en);
            if (item) {
                item.quantity++
            } else {
                state.shoppingCartList.push(action.payload)
            }
            state.positions += 1
            state.amount += Number(action.payload.price.split(' ').join(''))
        },

        incrementQuantity: (state, action) => {
            const item = state.shoppingCartList.find(item => item.name_en === action.payload.name_en);
            item.quantity++;
            state.positions += 1
            state.amount += Number(action.payload.price.split(' ').join(''))
        },
        
        decrementQuantity: (state, action) => {
            const item = state.shoppingCartList.find(item => item.name_en === action.payload.name_en);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
              state.positions -= 1
              state.amount -= Number(action.payload.price.split(' ').join(''))
            }
        },

        removeFromCart(state, action) {
            state.shoppingCartList = state.shoppingCartList.filter(item => item.name_en !== action.payload.name_en)
            state.amount -= Number(action.payload.price.split(' ').join('')) * action.payload.quantity
            state.positions -= action.payload.quantity
        }
    }
})

export const {addToCart, removeFromCart, decrementQuantity, incrementQuantity} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;