import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],

}

const slice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {

    }
})

export default slice.reducer;