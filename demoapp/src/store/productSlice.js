import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  isLoading: false,
  error: null
}

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const res = await axios('https://dummyjson.com/products')
    const data = await res.data.products;
    return data
  }
)

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart :(state,data)=>{
      console.log(data);
      const cartInfo = state.cart;
      cartInfo.push(data.payload);
       state.cart = cartInfo;
    }
  },
  extraReducers: (builder) => {
    //before making
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    //success
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload
    })
    //failed 
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})
export const {addToCart} = productsSlice.actions
export default productsSlice.reducer