import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, price, totalPrice, amount } = props;

  return (
    <div className={classes["cart-item-wrap"]}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.price}>$ {price} / item</p>
      <p className={classes["total-price"]}>Total $ {totalPrice}</p>
      <p className={classes.amount}>{amount}x</p>
      <div className={classes["btn-box"]}>
        <button className={classes["remove-item"]}>-</button>
        <button className={classes["add-item"]}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
