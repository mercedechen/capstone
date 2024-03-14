import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};


const cartSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // cart = [{ id: 1 }, { id: 2 }]
      // action.payload will always exist
      // action.payload = { id: 2 }
      // [{ id: 2 }]
      let existingProducts = state.cart.filter((item) => {
        return item.id === action.payload.id
      })

      if(existingProducts.length > 0){
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
          return item
        })
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
      return state
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((product) => {
        return product.id != action.payload
      })
    },
    setCart: (state, action) => {
      state.cart = action.payload.filter((item) => {
        return !!item 
      })
    },
    resetCart: (state, action) => {
      state.cart = [];
      return state
    }
  },
});

export const { addProduct, removeProduct, setCart, resetCart } = cartSlice.actions;
export const getCart = (state) => state.cartState.cart
export default cartSlice.reducer;