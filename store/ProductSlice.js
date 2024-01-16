import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  currentProduct: {},
  cart: []
}

const slice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      const { product, quantity, operation } = action.payload;
      switch (operation) {
        case 'add':
          // Check if the product already exists in the cart
          const existingProductIndex = state.cart.findIndex(item => item.id === product.id);
    
          if (existingProductIndex !== -1) {
            // Product is already in the cart, update the quantity
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex].quantity += quantity;
            state.cart = updatedCart;
          } else {
            // Product is not in the cart, add it with the specified quantity
            const newCartItem = { ...product, quantity };
            state.cart = [...state.cart, newCartItem];
          }
          break;
    
        case 'remove':
          // Find the index of the product in the cart
          const productIndexToRemove = state.cart.findIndex(item => item.id === product.id);
    
          if (productIndexToRemove !== -1) {
            // Product is in the cart, update the quantity or remove it
            const updatedCart = [...state.cart];
    
            if (quantity > 0 && quantity < updatedCart[productIndexToRemove].quantity) {
              // Decrease the quantity
              updatedCart[productIndexToRemove].quantity -= quantity;
            } else {
              // Remove the product from the cart if the quantity is zero or the specified quantity
              updatedCart.splice(productIndexToRemove, 1);
            }
    
            state.cart = updatedCart;
          }
          break;
    
        default:
          break;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase('ProductSlice/fetchProducts/pending', (state) => {
    })
      .addCase('ProductSlice/fetchProducts/fulfilled', (state, action) => {
        state.products = action.payload
      })
      .addCase('ProductSlice/fetchProducts/rejected', (state, action) => {
      })

      .addCase('ProductSlice/fetchProductDetails/pending', (state) => {
      })
      .addCase('ProductSlice/fetchProductDetails/fulfilled', (state, action) => {
        state.currentProduct = action.payload
      })
      .addCase('ProductSlice/fetchProductDetails/rejected', (state, action) => {
      })
  }
})

export const { fetchProductAction, addToCartAction } = slice.actions;
export default slice.reducer;