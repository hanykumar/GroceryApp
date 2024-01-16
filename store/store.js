import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import ProductSlice from "./ProductSlice";

const rootReducer = combineReducers({
    productsReducer: ProductSlice,
    
});

export default configureStore({
    reducer: rootReducer,
    middleware: (callback) => [thunk, ...callback()]
})