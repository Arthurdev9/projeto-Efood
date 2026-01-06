import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OrderPayload, RestaurantsType } from '../../types'

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantsType[], void>({
      query: () => 'restaurantes'
    }),
    getProducts: builder.query<RestaurantsType, string>({
      query: (id) => `restaurantes/${id}`
    }),
    puchase: builder.mutation<PurchaseResponse, OrderPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetProductsQuery,
  usePuchaseMutation
} = api

export default api
