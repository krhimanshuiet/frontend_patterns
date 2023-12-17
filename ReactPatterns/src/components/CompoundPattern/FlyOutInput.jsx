import React from "react";
import { FlyOut } from "./Flyout";
import useListing from "../HooksPattern/useListing";

const FlyOutInput = () => {
  const listings = useListing();

  return (
    <FlyOut>
      <FlyOut.Input placeholder="Search your home by city name and house name" />
      <FlyOut.List>
        {listings?.map(({ name, city }) => (
          <FlyOut.ListItem
            key={name} value={`${name},${city}`}>{`${name},${city}`}</FlyOut.ListItem>
        ))}
      </FlyOut.List>
    </FlyOut>
  );
};

export default FlyOutInput;
