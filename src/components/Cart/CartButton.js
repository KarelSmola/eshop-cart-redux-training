import React from "react";

import classes from "./CartButton.module.css";

const CartButton = () => {
  return (
    <button className={classes["cart-btn"]}>
      <h2 className={classes["cart-title"]}>Cart</h2>
      <p className={classes.amount}>2</p>
    </button>
  );
};

export default CartButton;
