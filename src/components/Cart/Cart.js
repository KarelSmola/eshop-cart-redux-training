import React from "react";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={classes["cart-wrap"]}>
      <h1 className={classes.title}>Shopping cart</h1>
      <CartItem />
    </div>
  );
};

export default Cart;
