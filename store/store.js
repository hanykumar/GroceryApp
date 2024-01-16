import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";


const rootReducer = combineReducers({
    products: ProductSlice
});

export default configureStore({
    reducer: rootReducer
})