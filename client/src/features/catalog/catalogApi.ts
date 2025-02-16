import { createApi } from "@reduxjs/toolkit/query/react"
import { product } from "../../app/models/product"
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const catalogApi = createApi({
    reducerPath: "catalogApi",
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<product[], void>({
            query: () => ({ url: "products" })
        }),
        fetchProductDetails: builder.query<product, number>({
            query: (id) => `products/${id}`
        }),
    }),
})
export const { useFetchProductsQuery, useFetchProductDetailsQuery } = catalogApi;