import React from "react";

import classes from "./NewItem.module.css";

const NewItem = (props) => {
  return (
    <div className={classes["item-wrap"]}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>$ {props.price}</p>
      <button className={classes["add-item-btn"]}>Add</button>
    </div>
  );
};

export default NewItem;
