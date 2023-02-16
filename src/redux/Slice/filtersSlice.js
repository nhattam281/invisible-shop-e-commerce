import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    category: '',
    sortby: '',
};

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducer: {
        searchFilterChange: (state, action) => {
            //Shop search product
        },
        categoryFilterChange: (state, action) => {
            //category
        },
        sortbyFilterChange: (state, action) => {
            //sortby
        },
    },
});

export default filtersSlice;
