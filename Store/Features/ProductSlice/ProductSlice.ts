import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../../Components/Product/Utils/Types';
import type { RootState } from '../../Store';
import { getProducts } from '../ApiMethods/ApiMethods';
// import axios from 'axios';
// import { API_STATUS, API_URL } from '../../Utils/ApiConstant';
// declaring the types for our state
export type ProductState = {
  data: [];
  pending: boolean;
  error: boolean;
};

const initialState: ProductState = {
  data: [],
  pending: false,
  error: false,
};

// This action is what we will call using the dispatch in order to trigger the API call.
// export const getProductList = createAsyncThunk('product/products', async () =>await getProducts());

export const getProductList = createAsyncThunk('product/products', async () => {
  const response = await getProducts({});
  return response.data;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.pending = true;
      })
      .addCase(getProductList.fulfilled, (state, { payload }) => {
        // When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
        state.pending = false;
        state.data = payload;
      })
      .addCase(getProductList.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
