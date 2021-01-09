import { selector, DefaultValue } from "recoil";
import notificationsState from "../state/notificationsState";

const notificationsSelector = selector({
  key: "notificationsSelector",
  get: ({ get }) => get(notificationsState),
  set: ({ set, get }, newValue) => {
    const notifications = get(notificationsState);
    set(
      notificationsState,
      newValue instanceof DefaultValue
        ? newValue
        : Array.isArray(newValue)
        ? [...newValue]
        : [...notifications, newValue]
    );
  },
});

export default notificationsSelector;
