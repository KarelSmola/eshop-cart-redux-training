import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./NewItem.module.css";

const NewItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, description, price } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        description,
        price,
      })
    );
  };

  return (
    <li className={classes["item-wrap"]}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <p className={classes.price}>$ {price}</p>
      <button className={classes["add-item-btn"]} onClick={addToCartHandler}>
        Add
      </button>
    </li>
  );
};

export default NewItem;
