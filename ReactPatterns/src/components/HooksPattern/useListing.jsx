import { useEffect, useState } from "react";

export default function useListing(){
    const [listings,setListings] = useState([]);
    useEffect(() => {
        const controller = new AbortController()
        fetch('https://house-lydiahallie.vercel.app/api/listings' , controller.signal)
        .then((res) => res.json())
        .then((res) => setListings(res.listings))

        return () => controller.abort()
    },[])
    return listings;
}

// we can use this inplace of constainer pattern.