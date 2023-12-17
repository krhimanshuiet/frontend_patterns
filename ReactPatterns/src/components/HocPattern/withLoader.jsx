import React from 'react';
import { LoadingSpinner } from '../Lodder';

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res.listings));
    }, []);
    if (!data) return <LoadingSpinner />;
    return <Element {...props} listings={data} />;
  };
}
