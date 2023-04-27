import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes["cart-btn"]} onClick={showCartHandler}>
      <h2 className={classes["cart-title"]}>Cart</h2>
      <p className={classes.amount}>{totalAmount}</p>
    </button>
  );
};

export default CartButton;
