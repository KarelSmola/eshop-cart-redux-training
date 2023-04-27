import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import Items from "./components/Items/Items";

let initial = true;

const App = () => {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  const url =
    "https://redux-cart-app-f0cfe-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

  useEffect(() => {
    const sendData = async () => {
      dispatch(
        uiActions.showNotification({
          title: "Pending",
          message: "Loading data",
        })
      );

      if (initial) {
        initial = false;
        return;
      }

      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw Error("Something went wrong");
      }

      dispatch(
        uiActions.showNotification({ title: "Success", message: "Data sent" })
      );
    };

    sendData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          title: "WRONG",
          message: "Fail",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <div>
      <Header />
      {notification && (
        <div>
          <h1>{notification.title}</h1>
          <p>{notification.message}</p>
        </div>
      )}
      {cartIsVisible && <Cart />}
      <Items />
    </div>
  );
};

export default App;
