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

const productsRemainingSelector = createSelector(
    productsAllSelector,
    filterSearchSelector,
    filterCategorySelector,
    (productList, searchText, categoryFilter) => {
        return productList.filter((product) => {
            if (categoryFilter === 'all category' || categoryFilter === '') {
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
    productsRemainingSelector,
    filterSortBySelector,
    (productRemaining, sortBy) => {
        if (sortBy === 'Price Low - High') {
            console.log('low h');
            return productRemaining.sort((a, b) => a.price - b.price);
        }
        if (sortBy === 'Price High - Low') {
            console.log('high low');
            return productRemaining.sort((a, b) => b.price - a.price);
        }
        if (sortBy === 'Name A - Z') {
            return productRemaining.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        }
        if (sortBy === 'Name Z - A') {
            return productRemaining.sort((a, b) => {
                if (a.title < b.title) {
                    return 1;
                }
                if (a.title > b.title) {
                    return -1;
                }
                return 0;
            });
        }
        return productRemaining;
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
    productsRemainingSelector,
    productSortBySelector,
};
