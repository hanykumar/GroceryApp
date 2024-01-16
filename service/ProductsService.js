import { createAsyncThunk } from "@reduxjs/toolkit";


const calculateDiscount = (originalPrice, discountPercentage) => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    const offerValue = originalPrice - discountedPrice;

    return { discountedPrice, offerValue };
};

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
export { OnFetchProductsService, OnFetchProductDetailsService, calculateDiscount }