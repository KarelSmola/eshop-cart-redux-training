import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.amount++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.amount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({ title: "Pending", message: "pending" })
    );

    const requestData = async () => {
      const response = await fetch(
        "https://redux-cart-app-f0cfe-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };

    try {
      await requestData();

      dispatch(
        uiActions.showNotification({ title: "Success", message: "success" })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({ title: "Error", message: "error" })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
