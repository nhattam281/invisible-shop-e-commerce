import { createSlice } from '@reduxjs/toolkit';

const cartStorage = localStorage.getItem('cartItems');

const initialState = {
    cartItems: cartStorage ? JSON.parse(cartStorage) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeCartItem: (state, action) => {},
        updateCartItem: (state, action) => {},
    },
    extraReducers: {},
});

export default cartSlice;
