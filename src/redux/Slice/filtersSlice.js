import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    category: 'all category',
    sortby: 'Default',
};

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },
        categoryFilterChange: (state, action) => {
            state.category = action.payload;
        },
        sortbyFilterChange: (state, action) => {
            state.sortby = action.payload;
        },
    },
});

export default filtersSlice;
