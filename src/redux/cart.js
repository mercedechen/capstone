import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 100,
      title: "Prototype",
      price: 129.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 101,
      title: "Prototype V2",
      price: 149.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 102,
      title: "Prototype V3",
      price: 129.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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