import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["supplies"],
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    addSupplies: builder.mutation({
      query: (data) => ({
        url: "/supplies",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supplies"],
    }),
    getSupplyById: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    deleteSupplyById: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
    updateSupplyById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/supplies/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const { useGetSuppliesQuery, useAddSuppliesMutation,useGetSupplyByIdQuery,useDeleteSupplyByIdMutation ,useUpdateSupplyByIdMutation} = baseApi;
