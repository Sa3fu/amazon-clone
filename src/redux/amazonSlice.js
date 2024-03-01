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
      const item = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.product.push(action.payload);
      }
    },
  },
});

export const { addToCart } = amazonSlice.actions;

export default amazonSlice.reducer;
