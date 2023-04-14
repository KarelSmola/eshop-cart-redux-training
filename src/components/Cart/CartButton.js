import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes["cart-btn"]} onClick={showCartHandler}>
      <h2 className={classes["cart-title"]}>Cart</h2>
      <p className={classes.amount}>2</p>
    </button>
  );
};

export default CartButton;
