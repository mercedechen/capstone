import { createApi, fetchBaseQuery } from '@reduxjs/toolkit'

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/",}),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: () => "/users",
    }),
  }),
});