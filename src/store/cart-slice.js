import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

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

const url =
  "https://redux-cart-app-f0cfe-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Pending",
        message: "Loading data",
      })
    );

    const requestData = async () => {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };

    try {
      await requestData();
      dispatch(
        uiActions.showNotification({ title: "Success", message: "Data sent" })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "WRONG",
          message: "Fail",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
