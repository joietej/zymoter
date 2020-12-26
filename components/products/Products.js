import React from "react";

const Products = ({ data }) => {
  return (
    <ul>
      {data.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
};
export default Products;
