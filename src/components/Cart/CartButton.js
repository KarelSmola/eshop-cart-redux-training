import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes["cart-btn"]} onClick={showCartHandler}>
      <h2 className={classes["cart-title"]}>Cart</h2>
      <p className={classes.amount}>{cartQuantity}</p>
    </button>
  );
};

export default CartButton;
