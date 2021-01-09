import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

import ProductItem from "./ProductItem";
import useCart from "../../store/hooks/cart";

const ProductList = ({ products }) => {
  const { addItem, removeItem } = useCart();
  return (
    <Grid narrow>
      <Row>
        {products.map((p, i) => (
          <Column
            key={`prodlist_item_${i}`}
            style={{ gap: "1rem" }}
            sm={4}
            md={4}
            lg={4}
          >
            <ProductItem product={p} onAdd={addItem} onRemove={removeItem} />
          </Column>
        ))}
      </Row>
    </Grid>
  );
};

export default ProductList;
