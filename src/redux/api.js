import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://fakestoreapi.com";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerUser) => ({
        url: "/users",
        method: "POST",
        body: registerUser,
      }),
    }),
    products: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
    product: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const { useRegisterMutation, useProductsQuery, useProductQuery } = apiSlice;