import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
} from "carbon-components-react";

import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <StructuredListWrapper>
      <StructuredListBody>
        {products.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

export default ProductList;
