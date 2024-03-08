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

    // Get users
    // https://fakestoreapi.com/users
    account: builder.query({
      query: (token) => ({
        url: `/users`,
        headers: {
          authorization: `Bearer ${token}`
        }
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

  }),
});

export const { 
  useRegisterMutation,
  useLoginMutation,
  useAccountQuery,
  useProductsQuery,
  useProductQuery,
  useCartQuery,
 } = apiSlice;