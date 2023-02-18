import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slice/cartSlice';
import filtersSlice from './Slice/filtersSlice';
import productsSlice from './Slice/productSlice';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default store;
