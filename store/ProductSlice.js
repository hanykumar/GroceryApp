import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  currentProduct: {},
  cart: [],
  favorites: [],
}

const slice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const { id } = action.payload;
      const existingIndex = state.favorites.findIndex(item => item.id === id);
      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
    addToCartAction: (state, action) => {
      const { product, quantity, operation } = action.payload;
      switch (operation) {
        case 'add':
          const existingProductIndex = state.cart.findIndex(item => item.id === product.id);
    
          if (existingProductIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex].quantity += quantity;
            state.cart = updatedCart;
          } else {
            const newCartItem = { ...product, quantity };
            state.cart = [...state.cart, newCartItem];
          }
          break;
    
        case 'remove':
          const productIndexToRemove = state.cart.findIndex(item => item.id === product.id);
    
          if (productIndexToRemove !== -1) {
            const updatedCart = [...state.cart];
    
            if (quantity > 0 && quantity < updatedCart[productIndexToRemove].quantity) {
              updatedCart[productIndexToRemove].quantity -= quantity;
            } else {
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

export const { fetchProductAction, addToCartAction, addToFavorite } = slice.actions;
export default slice.reducer;