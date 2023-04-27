import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addItem(state, action) {
      const newItem = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        totalPrice: action.payload.price,
        amount: 1,
      };
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.totalPrice,
          amount: newItem.amount,
        });
      } else {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.amount = existingItem.amount + newItem.amount;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.totalAmount--;

      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.amount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
