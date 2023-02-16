import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/apiURL';
import { STATUS } from '../../utils/status';

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider
            .addCase(fetchProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // console.log('status', state.productsStatus);
                state.productsStatus = STATUS.SUCCEEDED;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAILED;
            });
    },
});

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await fetch(`${BASE_URL}products`);
    const data = await res.json();
    return data.products;
});

export { fetchProducts };
export default productsSlice;
