import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const url =
  "https://redux-cart-app-f0cfe-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "ERROR",
          message: "Fetching problem",
        })
      );
    }
  };
};

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
