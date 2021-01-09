import { selector, DefaultValue } from "recoil";
import cartState from "../state/cartState";
import { appNotificationState } from "../state/notificationsState";

const cartSelector = selector({
  key: "cartSelector",
  get: ({ get }) => get(cartState),
  set: ({ set, get }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      const notification = get(appNotificationState);
      const title = `🛒 Cart is updated`;
      const caption = `Items : ${newValue.total_items || 0}`;
      if (!notification || notification.caption !== caption) {
        set(appNotificationState, {
          title,
          caption,
          type: "toast",
          timeout: 5000,
        });
      }
    }
    set(cartState, newValue);
  },
});

export default cartSelector;
