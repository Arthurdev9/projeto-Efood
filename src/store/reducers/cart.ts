import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../pages/Home'

type CartItem = ProductType & { quantity: number }

type CartType = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartType = {
  items: [],
  isOpen: false
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
    }
  }
})

export const { add, close, open, removeProduct } = cartSlice.actions
export default cartSlice.reducer
