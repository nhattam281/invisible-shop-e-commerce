import { createSelector } from '@reduxjs/toolkit';

//get all product, all product status
const productsAllSelector = (state) => state.products.products;
const productsStatusSelector = (state) => state.products.productsStatus;

//get product by id,product status
const productSelector = (state) => state.products.product;
const productStatusSelector = (state) => state.products.productStatus;

//filter
const filterSearchSelector = (state) => state.filters.search;
const filterCategorySelector = (state) => state.filters.category;
const filterSortBySelector = (state) => state.filters.sortby;

//cart
const cartItemsSelector = (state) => state.cart.cartItems;
const cartTotalAmountSelector = (state) => state.cart.cartTotalAmount;
const cartTotalQuantitySelector = (state) => state.cart.cartTotalQuantity;

const productsRemainingSelector = createSelector(
    productsAllSelector,
    filterSearchSelector,
    filterCategorySelector,
    (productList, searchText, categoryFilter) => {
        return productList.filter((product) => {
            if (categoryFilter === 'all category') {
                return product.title.includes(searchText);
            }

            return (
                product.title.includes(searchText) &&
                product.category.includes(categoryFilter)
            );
        });
    }
);

const productSortBySelector = createSelector(
    filterSortBySelector,
    productsRemainingSelector,
    (sortBy, productRemaining) => {
        if (sortBy === 'Price Low - High') {
            return [...productRemaining].sort((a, b) => {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                return 0;
            });
        } else if (sortBy === 'Price High - Low') {
            return [...productRemaining].sort((a, b) => {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            });
        } else if (sortBy === 'Name A - Z') {
            return [...productRemaining].sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        } else if (sortBy === 'Name Z - A') {
            return [...productRemaining].sort((a, b) => {
                if (a.title < b.title) {
                    return 1;
                }
                if (a.title > b.title) {
                    return -1;
                }
                return 0;
            });
        } else {
            return [...productRemaining];
        }
    }
);

export {
    productsAllSelector,
    productsStatusSelector,
    productSelector,
    productStatusSelector,
    filterSearchSelector,
    filterCategorySelector,
    filterSortBySelector,
    cartItemsSelector,
    productSortBySelector,
    cartTotalAmountSelector,
    cartTotalQuantitySelector,
};
