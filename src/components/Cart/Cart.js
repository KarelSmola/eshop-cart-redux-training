import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

import classes from "./Cart.module.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={classes["cart-wrap"]}>
      <h1 className={classes.title}>Shopping cart</h1>
      {items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          title={item.title}
          price={item.price}
          totalPrice={item.totalPrice}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default Cart;
