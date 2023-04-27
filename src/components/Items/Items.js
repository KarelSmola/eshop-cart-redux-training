import React from "react";
import NewItem from "./NewItem";

import classes from "./Items.module.css";

const DATA = [
  {
    id: "p1",
    name: "Bananas",
    description: "Bio bananas from Spain",
    price: 5,
  },
  {
    id: "p2",
    name: "Oranges",
    description: "Bio oranges from Spain",
    price: 4,
  },
];

const Items = () => {
  return (
    <div className={classes["items-wrap"]}>
      {DATA.map((item) => (
        <NewItem
          id={item.id}
          key={item.id}
          title={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Items;
