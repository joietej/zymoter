import React from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import orderState from "../state/orderState";
import useCart from "./cart";
import commerce from "../../lib/commerceClient";
import checkoutState from "../state/checkoutState";

const useOrder = () => {
  const [order, setOrder] = useRecoilState(orderState);
  const resetOrder = useResetRecoilState(orderState);
  const [confirmedOrder, setConfirmedOrder] = React.useState(null);
  const { setCart } = useCart();
  const checkout = useRecoilValue(checkoutState);

  React.useEffect(() => {
    if (order.line_items.length && !confirmedOrder) {
      commerce.checkout
        .capture(checkout.checkoutToken.id, order)
        .then((order) => {
          // Save the order into state
          setConfirmedOrder(order);
          // user refreshes the page!
          window.sessionStorage.setItem("order_receipt", JSON.stringify(order));
        })
        .catch((error) => {
          console.log("There was an error confirming your order", error);
        });
    }
  }, [order]);

  React.useEffect(() => {
    if (confirmedOrder && order.line_items.length) {
      commerce.cart
        .refresh()
        .then((newCart) => {
          setCart(newCart);
          resetOrder();
        })
        .catch((error) => {
          console.log("There was an error refreshing your cart", error);
        });
    }
  }, [confirmedOrder, order]);

  return {order, setOrder, confirmedOrder, setConfirmedOrder};
};

export default useOrder;
