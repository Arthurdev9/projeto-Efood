import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsType } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantsType[], void>({
      query: () => 'restaurantes'
    }),
    getProducts: builder.query<RestaurantsType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetProductsQuery } = api

export default api
