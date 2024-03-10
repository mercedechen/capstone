import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api"
import cart from './cart'

export default configureStore({
  reducer: {
    // api object --> key:value
    [apiSlice.reducerPath]: apiSlice.reducer,
    
    cartState: cart
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

