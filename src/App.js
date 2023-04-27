import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import Items from "./components/Items/Items";

const App = () => {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

  return (
    <div>
      <Header />
      {cartIsVisible && <Cart />}
      <Items />
    </div>
  );
};

export default App;
