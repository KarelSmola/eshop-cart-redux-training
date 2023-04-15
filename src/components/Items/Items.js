import React from "react";
import NewItem from "./NewItem";

import classes from "./Items.module.css";

const DATA = [
  {
    id: "p1",
    title: "Bananas",
    description: "Bio bananas from Spain",
    price: 5,
  },
  {
    id: "p2",
    title: "Oranges",
    description: "Bio oranges from Spain",
    price: 4,
  },
];

const Items = () => {
  return (
    <ul className={classes["items-wrap"]}>
      {DATA.map((item) => (
        <NewItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </ul>
  );
};

export default Items;
