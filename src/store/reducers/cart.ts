import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../../types'

type CartItem = ProductType & { quantity: number }

type CartType = {
  items: CartItem[]
  isOpen: boolean
  isOrder: boolean
  isPayment: boolean
}

const initialState: CartType = {
  items: [],
  isOpen: false,
  isOrder: false,
  isPayment: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductType>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )

      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1
        } else {
          state.items.splice(itemIndex, 1)
        }
      }
    },

    openOrder: (state) => {
      state.isOrder = true
    },
    closeOrder: (state) => {
      state.isOrder = false
    },
    openPayment: (state) => {
      state.isPayment = true
    },
    closePayment: (state) => {
      state.isPayment = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  close,
  open,
  removeProduct,
  openOrder,
  closeOrder,
  openPayment,
  closePayment,
  clear
} = cartSlice.actions

export default cartSlice.reducer
