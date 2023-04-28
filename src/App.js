import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import Items from "./components/Items/Items";
import { sendCartData } from "./store/cart-actions";
import { fetchCartData } from "./store/cart-actions";

let initial = true;

const App = () => {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      dispatch(uiActions.showNotification({ title: "", message: "" }));
      return;
    }

    dispatch(sendCartData(cart));
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
