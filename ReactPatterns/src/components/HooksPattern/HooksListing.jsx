import React,{memo} from "react";
import useListing from "./useListing";
import { ListingsGrid } from "../PresentationalPattern/ListingsGrid";
import { Listing } from "../PresentationalPattern/Listing";

const HooksListing = () => {
  const listings = useListing();
  // console.log("rendered");
  return (
    <ListingsGrid>
      {listings.map((item, index) => (
        <Listing key={index} listing={item} />
      ))}
    </ListingsGrid>
  );
};

export default memo(HooksListing);
