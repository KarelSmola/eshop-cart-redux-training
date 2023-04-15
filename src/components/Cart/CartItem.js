import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, price, totalPrice, amount } = props;

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  const removeItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <div className={classes["cart-item-wrap"]}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.price}>$ {price} / item</p>
      <p className={classes["total-price"]}>Total $ {totalPrice}</p>
      <p className={classes.amount}>{amount}x</p>
      <div className={classes["btn-box"]}>
        <button className={classes["remove-item"]} onClick={removeItem}>
          -
        </button>
        <button className={classes["add-item"]} onClick={addItem}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
