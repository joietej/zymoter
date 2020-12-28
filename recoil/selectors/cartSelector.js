import { selector, DefaultValue } from "recoil";
import cartState from "../atoms/cart";

const cartSelector = selector({
  key: "cartSelector",
  get: ({ get }) => get(cartState),
  set: ({ set, get }, newValue) => {
    const cart = get(cartState);
    set(
      cartState,
      newValue instanceof DefaultValue
        ? newValue
        : Array.isArray(newValue)
        ? [...newValue]
        : [...cart, newValue]
    );
  },
});

export default cartSelector;
