import React from "react";
import ProductList from "./ProductList";

const Products = ({ data }) => {
  return (
    <ProductList products={data} />
  );
};
export default Products;
