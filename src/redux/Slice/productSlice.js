import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/apiURL';
import { STATUS } from '../../utils/status';

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    product: {},
    productStatus: STATUS.IDLE,
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
            })

            // get product by id
            .addCase(getProductByID.pending, (state, action) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(getProductByID.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCEEDED;
                state.product = action.payload;
            })
            .addCase(getProductByID.rejected, (state, action) => {
                state.productStatus = STATUS.FAILED;
            });
    },
});

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await fetch(`${BASE_URL}products`);
    const data = await res.json();
    return data.products;
});

const getProductByID = createAsyncThunk(
    'products/getProductByID',
    async (id) => {
        const res = await fetch(`${BASE_URL}products/${id}`);
        const data = await res.json();
        return data;
    }
);

const getProducsOfCategory = createAsyncThunk(
    'products/getProductsOfCategory',
    async (category) => {
        const res = await fetch(`${BASE_URL}/products/${category}`);
        const data = await res.json();
        console.log(data);
        return data;
    }
);

export { fetchProducts, getProductByID, getProducsOfCategory};
export default productsSlice;
