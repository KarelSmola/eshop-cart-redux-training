import React from "react";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes["cart-btn"]} onClick={showCartHandler}>
      <h2 className={classes["cart-title"]}>Cart</h2>
      <p className={classes.amount}>2</p>
    </button>
  );
};

export default CartButton;
