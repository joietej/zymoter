import React from "react";
import { Button, Row, StructuredListCell } from "carbon-components-react";
import { Add16, Subtract16 } from "@carbon/icons-react";

const CartItem = ({ item }) => {
  return (
    <>
      <div style={{ display: 'flex',flexWrap:'wrap', alignItems: 'center', justifyContent: "space-between" }}>
        <img height="48" width="48" src={item.media.source} alt={item.name} />
        <h6>{item.name}</h6>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", gap:"0.5rem" }}>
          <Button
            renderIcon={Subtract16}
            iconDescription="Reduce quantity"
            hasIconOnly
            size="sm"
          />
          <h6>{item.quantity}</h6>
          <Button
            renderIcon={Add16}
            iconDescription="Increase quantity"
            hasIconOnly
            size="sm"
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
