import { selector, DefaultValue } from "recoil";
import cartState from "../atoms/cart";
import { appNotificationState } from "../atoms/notifications"

const cartSelector = selector({
  key: "cartSelector",
  get: ({ get }) => get(cartState),
  set: ({ set, get }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      const notification = get(appNotificationState);
      const title = `🛒 Cart is updated with ${newValue.total_items || 0} item/s`
      if (!notification || notification.title !== title) {
        set(appNotificationState, ({ title }));
      }
    }
    set(cartState, newValue);
  }
});

export default cartSelector;
