import { createApi } from "@reduxjs/toolkit/query/react"
import { product } from "../../app/models/product"
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import { productParams } from "../../app/models/productParams";
import { filterEmptyValues } from "../../lib/utils";
import { Pagination } from "../../app/models/pagination";

export const catalogApi = createApi({
    reducerPath: "catalogApi",
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<{ items: product[], pagination: Pagination }, productParams>({
            query: (productParams) => {
                return {
                    url: "products",
                    params: filterEmptyValues(productParams)
                }
            },
            transformResponse: (items: product[], meta) => {
                const paginationHeader = meta?.response?.headers.get('Pagination');
                const pagination = paginationHeader ? JSON.parse(paginationHeader) : null;
                return { items, pagination };
            }
        }),
        fetchProductDetails: builder.query<product, number>({
            query: (id) => `products/${id}`
        }),
        fetchFilters: builder.query<{ brands: string[], types: string[] }, void>({
            query: () => `products/filters`
        }),
    }),
})
export const { useFetchProductsQuery, useFetchProductDetailsQuery, useFetchFiltersQuery } = catalogApi;