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
                if (
                    state.cartItems[itemIndex].cartQuantity <
                    action.payload.stock
                ) {
                    state.cartItems[itemIndex].cartQuantity += 1;
                } else if (
                    state.cartItems[itemIndex].cartQuantity >=
                    action.payload.stock
                ) {
                    state.cartItems[itemIndex].cartQuantity =
                        action.payload.stock;
                }
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeCartItem: (state, action) => {
            const newCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );

            state.cartItems = newCartItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        decreaseCartItemQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const newCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                state.cartItems = newCartItems;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        // increaseCartItemQty: (state, action) => {
        //     const itemIndex = state.cartItems.findIndex(
        //         (item) => item.id === action.payload.id
        //     );
        //     if (
        //         state.cartItems[itemIndex].cartQuantity < action.payload.stock
        //     ) {
        //         state.cartItems[itemIndex].cartQuantity += 1;
        //     }
        //     if (
        //         state.cartItems[itemIndex].cartQuantity >= action.payload.stock
        //     ) {
        //         console.log('Out of stock', action.payload.stock);
        //         state.cartItems[itemIndex].cartQuantity = action.payload.stock;
        //     }
        //     localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        // },
        getTotal: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});

export default cartSlice;
