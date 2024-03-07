import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  userInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.product.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.product.push(action.payload);
      }
    },
    incrementQty: (state, action) => {
      const item = state.product.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQty: (state, action) => {
      const itemIndex = state.product.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        const item = state.product[itemIndex];
        if (item.quantity <= 1) {
          state.product.splice(itemIndex, 1);
        } else {
          item.quantity--;
        }
      }
    },
    deleteItem: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.product = [];
    },

    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    userLogout: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  decrementQty,
  incrementQty,
  setUserInfo,
  userLogout,
} = amazonSlice.actions;

export default amazonSlice.reducer;
