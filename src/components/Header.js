import React from "react";

import Logo from "./UI/Logo";
import CartButton from "./Cart/CartButton";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <CartButton />
    </div>
  );
};

export default Header;
