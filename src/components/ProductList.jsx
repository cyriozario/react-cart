import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    { id: 1, title: "Product 1", price: 29.99, image: product1 },
    { id: 2, title: "Product 2", price: 39.99, image: product2 },
    { id: 3, title: "Product 3", price: 49.99, image: product3 },
    { id: 4, title: "Product 4", price: 59.99, image: product4 },
    { id: 5, title: "Product 5", price: 69.99, image: product5 },
  ];
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
