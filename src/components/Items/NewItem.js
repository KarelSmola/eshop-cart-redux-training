import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./NewItem.module.css";

const NewItem = ({ id, title, description, price }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ id, title, price }));
  };

  return (
    <div className={classes["item-wrap"]}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <p className={classes.price}>$ {price}</p>
      <button className={classes["add-item-btn"]} onClick={addItemHandler}>
        Add
      </button>
    </div>
  );
};

export default NewItem;
