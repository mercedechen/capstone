import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://fakestoreapi.com";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Register a new user
    // https://fakestoreapi.com/users
    register: builder.mutation({
      query: (registerUser) => ({
        url: "/users",
        method: "POST",
        body: registerUser,
      }),
    }),

    // Login as existing user
    // https://fakestoreapi.com/auth/login
    login: builder.mutation({
      query: (loginUser) => ({
        url: "/auth/login",
        method: "POST",
        body: loginUser,
      }),
    }),

    // Get user account details
    // https://fakestoreapi.com/users/:id
    account: builder.query({
      query: (userAccount) => ({
        url: `/users/${id}`,
      }),
    }),

    // Get list of all products
    // https://fakestoreapi.com/products
    products: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),

    // Get single product details by id
    // https://fakestoreapi.com/products/:id
    product: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),

    category: builder.query({
      query: (category) => ({
        url: `products/${category}`
      }),
    }),
  }),
});

export const { 
  useRegisterMutation,
  useLoginMutation,
  useProductsQuery,
  useProductQuery,
  useCategoryQuery,
 } = apiSlice;