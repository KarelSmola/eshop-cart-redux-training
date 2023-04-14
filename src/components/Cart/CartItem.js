import React from "react";

import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={classes["cart-item-wrap"]}>
      <h1 className={classes.title}>Bananas</h1>
      <p className={classes.price}>$ 5</p>
      <p className={classes.amount}>3x</p>
      <div className={classes["btn-box"]}>

      <button className={classes["remove-item"]}>-</button>
      <button className={classes["add-item"]}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
