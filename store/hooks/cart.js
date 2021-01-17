import React from "react";
import { useRecoilState } from "recoil";
import cartState from "../../store/selectors/cartSelector";
import commerce from "../../lib/commerceClient";

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  React.useEffect(() => {
    if (!cart) {
      commerce.cart.retrieve().then((cart) => {
        console.log(cart);
        setCart(cart);
      });
    }
  }, []);

  const addItem = (id) => {
    commerce.cart.add(id, 1).then((item) => {
      if (item.success) {
        setCart(item.cart);
        //setAppNotification({ title: `${item.product_name} added to cart` });
      }
    });
  };

  const removeItem = (id) => {
    const lineItem = cart.line_items.find((i) => i.product_id === id);
    if (lineItem) {
      commerce.cart.remove(lineItem.id).then((item) => {
        if (item.success) {
          setCart(item.cart);
          // setAppNotification({
          //   title: `${item.product_name} removed from cart`,
          // });
        }
      });
    }
  };

  const updateItem = (id, quantity = 1) => {
    const lineItem = cart.line_items.find((i) => i.product_id === id);
    if (lineItem) {
      commerce.cart.update(lineItem.id, { quantity }).then((item) => {
        if (item.success) {
          setCart(item.cart);
          // setAppNotification({
          //   title: `${item.product_name} updated`,
          // });
        }
      });
    }
  };

  return { cart, addItem, updateItem, removeItem, setCart };
};

export default useCart;
