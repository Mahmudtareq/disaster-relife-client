import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
    }),
    addSupplies: builder.mutation({
      query: (data) => ({
        url: "/supplies",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetSuppliesQuery, useAddSuppliesMutation } = baseApi;
