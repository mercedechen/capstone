import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 100,
      title: "Sample",
    },
    {
      id: 101,
      title: "Prototype"
    },
    {
      id: 102,
      title: "Test"
    }
  ],
};

const cartSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    removeProduct: (state, action) => {
      console.log('state1', state.cart)
      state.cart = state.cart.filter((product) => {
        return product.id != action.payload
      })
      console.log('remove product', action)
      console.log('state2', state.cart)
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const getCart = (state) => state.cartState.cart
export default cartSlice.reducer;