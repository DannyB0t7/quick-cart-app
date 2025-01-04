import React from "react";
import Button from "./UI/Button";

function Products({ product, onAddToCart }) {
  const productAddHandler = function () {
    onAddToCart(product);
  };

  return (
    <li className="flex flex-col gap-5 justify-between">
      <img src={product.image} alt={product.name} className="h-auto w-auto" />
      <div className="text-center">
        <p>{product.name}</p>
        <p>${product.price}</p>
        <Button onClick={productAddHandler} />
      </div>
    </li>
  );
}

export default Products;
