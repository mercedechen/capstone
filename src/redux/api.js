import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://fakestoreapi.com";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Register a new user
    // https://fakestoreapi.com/users
    register: builder.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
    }),

    // Login as existing user
    // https://fakestoreapi.com/auth/login
    login: builder.mutation({
      query: () => ({
        url: "/auth/login",
        method: "POST",
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
    // https://fakestoreapi.com/products/1
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