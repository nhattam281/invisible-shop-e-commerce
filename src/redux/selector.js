// import { createSelector } from '@reduxjs/toolkit';

const productsAllSelector = (state) => state.products.products;
const productStatusSelector = (state) => state.products.productsStatus;

export { productsAllSelector, productStatusSelector };
