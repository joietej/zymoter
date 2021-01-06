import React from "react";
import { white } from '@carbon/colors';

import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  Button,
  ButtonSet,
} from "carbon-components-react";

import CartItem from "./CartItem";

const Cart = ({cart}) => {
  
  if (!cart || !cart.line_items || cart.line_items < 1) {
    return <div>Empty</div>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", height:'100%' }}>
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>
              <h6 style={{color:white}}>Total Items : {cart.line_items.length}</h6>
            </StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {cart.line_items.map((lineItem) => (
            <StructuredListRow key={lineItem.id}>
              <StructuredListCell>
                <CartItem item={lineItem} className="cart__inner" />
              </StructuredListCell>
            </StructuredListRow>
          ))}
          <StructuredListRow>
            <StructuredListCell>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: "space-between" }}>
                <h6>Subtotal:</h6>
                <h6>
                  {cart.subtotal.formatted_with_symbol}
                </h6>
              </div>
            </StructuredListCell>
          </StructuredListRow>
        </StructuredListBody>
      </StructuredListWrapper>
      <ButtonSet>
        <Button kind="secondary">Delete All</Button>
        <Button kind="primary">Checkout</Button>
      </ButtonSet>
    </div>

  );
};
export default Cart;
