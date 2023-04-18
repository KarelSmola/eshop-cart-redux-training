import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { uiActions } from "./store/ui-slice";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import Items from "./components/Items/Items";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  // useEffect(() => {
  //   const sendData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         title: "Pending",
  //         message: "Sending data",
  //       })
  //     );

  //     if (isInitial) {
  //       isInitial = false;
  //       return;
  //     }

  //     const response = await fetch(
  //       "https://redux-cart-app-f0cfe-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
  //       { method: "PUT", body: JSON.stringify(cart) }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         title: "Success",
  //         message: "Loaded successgully",
  //       })
  //     );
  //   };

  //   sendData().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         title: "WRONG",
  //         message: "Sending data failed",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  return (
    <div>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      {showCart && <Cart />}
      <Items />
    </div>
  );
};

export default App;
