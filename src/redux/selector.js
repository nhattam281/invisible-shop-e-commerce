// import { createSelector } from '@reduxjs/toolkit';

//get all product, all product status
const productsAllSelector = (state) => state.products.products;
const productsStatusSelector = (state) => state.products.productsStatus;

//get product by id,product status
const productSelector = (state) => state.products.product;
const productStatusSelector = (state) => state.products.productStatus;

export {
    productsAllSelector,
    productsStatusSelector,
    productSelector,
    productStatusSelector,
};
