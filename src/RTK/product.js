import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetProductByNameQuery } = ProductApi;
