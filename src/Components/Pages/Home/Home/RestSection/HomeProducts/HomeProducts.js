import React, { useEffect, useState } from "react";
import "./HomeProducts.css";
import SingleProduct from "./SingleProduct/SingleProduct";
const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://safe-reaches-08421.herokuapp.com/designs")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center  gap-y-10">
        {products.slice(0, 6).map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
