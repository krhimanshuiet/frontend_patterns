import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
import withLoader from '../HocPattern/withLoader';
export function Listings({listings}) {
  // console.log("rendered listings");
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default withLoader(
  Listings,
  'https://house-lydiahallie.vercel.app/api/listings'
);
