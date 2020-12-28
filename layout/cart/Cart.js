import React from "react";
import useCart from "../../hooks/state/cart";
import CartItem from "./CartItem";

const Cart = () => {
  const {cart} = useCart();

  if (!cart || cart.length < 1) {
    return <div>Empty</div>;
  }
  return (
    <>
      {cart.map((lineItem) => (
        <CartItem item={lineItem} key={lineItem.id} className="cart__inner" />
      ))}
      <div className="cart__total">
        <p className="cart__total-title">Subtotal:</p>
        <p className="cart__total-price">
          {/* {cart.subtotal.formatted_with_symbol} */}
        </p>
      </div>
    </>
  );
};
export default Cart;
