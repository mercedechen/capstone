import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};


const cartSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((product) => {
        return product.id != action.payload
      })
    },
    setCart: (state, action) => {
      state.cart = action.payload
    }
  },
});

export const { addProduct, removeProduct, setCart } = cartSlice.actions;
export const getCart = (state) => state.cartState.cart
export default cartSlice.reducer;