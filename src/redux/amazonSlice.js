import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  userInfo: [],
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.product.push(action.payload);
    },
  },
});

export const { addToCart } = amazonSlice.actions;

export default amazonSlice.reducer;
