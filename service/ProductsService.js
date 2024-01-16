import { createAsyncThunk } from "@reduxjs/toolkit";

const OnFetchProductsService = createAsyncThunk(
    'ProductSlice/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const results = await res.json();
            return results.products; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const OnFetchProductDetailsService = createAsyncThunk(
    'ProductSlice/fetchProductDetails',
    async (id, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const results = await res.json();
            return results;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export {OnFetchProductsService, OnFetchProductDetailsService}