import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import Items from "./components/Items/Items";

const App = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <div>
      <Header />
      {showCart && <Cart />}
      <Items />
    </div>
  );
};

export default App;
