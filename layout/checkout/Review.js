import {
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
} from "carbon-components-react";
import React from "react";
import { useRecoilValue } from "recoil";
import cartState from "../../store/state/cartState";

const Review = () => {
  const cart = useRecoilValue(cartState);
  return (
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>
            <h6>Item</h6>
          </StructuredListCell>
          <StructuredListCell head>
            <h6>Item</h6>
          </StructuredListCell>
          <StructuredListCell head>
            <h6>Price</h6>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        {cart.line_items.map((item) => (
          <StructuredListRow key={item.id}>
            <StructuredListCell>
              <h6>{item.name}</h6>
            </StructuredListCell>
            <StructuredListCell>
              <h6>{item.quantity}</h6>
            </StructuredListCell>
            <StructuredListCell>
              <h6>{item.price.formatted_with_symbol}</h6>
            </StructuredListCell>
          </StructuredListRow>
        ))}
        <StructuredListRow>
          <StructuredListCell>
            <h6></h6>
          </StructuredListCell>
          <StructuredListCell>
            <h6>Subtotal</h6>
          </StructuredListCell>
          <StructuredListCell>
            <h6>{cart.subtotal.formatted_with_symbol}</h6>
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

export default Review;
