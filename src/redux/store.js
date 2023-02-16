import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './Slice/filtersSlice';
import productsSlice from './Slice/productSlice';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        products: productsSlice.reducer,
    },
});

export default store;
