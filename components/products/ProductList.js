import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  Grid,
  Row,
  Column,
} from "carbon-components-react";

import ProductItem from "./ProductItem";
import useCart from "../../hooks/state/cart";

const ProductList = ({ products }) => {
  let data = new Array(20);
  data.fill(products[0], 0, 19);
  const { addItem, removeItem } = useCart();
  return (
    <Grid narrow>
      <Row>
        {data.map((p) => (
          <Column styel={{gap:'1rem'}} sm={4} md={4} lg={4}>
            <ProductItem
              key={p.id}
              product={p}
              onAdd={addItem}
              onRemove={removeItem}
            />
          </Column>
        ))}
      </Row>
    </Grid>
  );
};

export default ProductList;
