import React from "react";

import classes from "./Notification.module.css";

const Notification = (props) => {
  return (
    <div className={classes.notification}>
      <h1>{props.title}</h1>
      <p className={classes.message}>{props.message}</p>
    </div>
  );
};

export default Notification;
