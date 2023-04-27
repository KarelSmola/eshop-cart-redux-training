import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = ({ id, title, price, totalPrice, amount }) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(cartActions.addItem({ id, title, price, totalPrice, amount }));
  };

  return (
    <div className={classes["cart-item-wrap"]}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.price}>$ {price}</p>
      <p className={classes.price}>$ {totalPrice}</p>
      <p className={classes.amount}>{amount}x</p>
      <div className={classes["btn-box"]}>
        <button className={classes["remove-item"]}>-</button>
        <button className={classes["add-item"]} onClick={addItemHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
