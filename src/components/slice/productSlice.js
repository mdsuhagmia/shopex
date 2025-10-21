import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'counter',
  initialState: {
    cartItem: localStorage.getItem("cartstore")  ? JSON.parse(localStorage.getItem("cartstore")) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item)=>item.id === action.payload.id)
      if(findProduct !== -1){
        state.cartItem[findProduct].qun += 1
        localStorage.setItem("cartstore", JSON.stringify(state.cartItem))
      }else{
        state.cartItem = [...state.cartItem, action.payload]
        localStorage.setItem("cartstore", JSON.stringify(state.cartItem))
      }
    },
    increment: (state, action) => {
      let item = state.cartItem.find(i => i.id === action.payload.id);
      if (item) {
        item.qun += 1;
        localStorage.setItem("cartstore", JSON.stringify(state.cartItem))
      }
    },
    decrement: (state, action) =>{
      let item = state.cartItem.find((dec)=>dec.id === action.payload.id)
      if(item && item.qun > 1){
        item.qun -= 1
        localStorage.setItem("cartstore", JSON.stringify(state.cartItem))
      }
    },
    productRemove: (state, action) => {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cartstore", JSON.stringify(state.cartItem))
    },
  },
})

export const { addToCart, increment, decrement, productRemove } = productSlice.actions

export default productSlice.reducer