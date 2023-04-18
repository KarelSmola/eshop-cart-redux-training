import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-app-f0cfe-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      const data = response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({ title: "Error", message: "error" })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({ title: "Pending", message: "Sending data" })
    );

    const requestData = async () => {
      const response = await fetch(
        "https://redux-cart-app-f0cfe-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };

    try {
      await requestData();

      dispatch(
        uiActions.showNotification({
          title: "Success",
          message: "Data sent successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          message: "Error during sending!",
        })
      );
    }
  };
};
