import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartIsVisible(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;
export default store;
