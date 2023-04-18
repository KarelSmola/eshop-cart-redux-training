import { uiActions } from "./ui-slice";

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