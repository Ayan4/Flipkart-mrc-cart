import React, { useEffect, useState } from "react";
import { fakeFetch } from "../Api/FakeFetch";
import ProductCard from "../components/ProductCard";

function ProductListing() {
  const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    try {
      fakeFetch()
        .then(res => {
          setProducts(prev => res);
          //   setLoading(false);
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
      //   setLoading(false);
    }
  }, []);

  //   console.log(products);

  return (
    <div>
      <div className="px-2 sm:px-16 flex flex-wrap justify-center">
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
