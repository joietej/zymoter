import { atom } from "recoil";

const notificationsState = atom({
  key: "notificationsState",
  default: [],
});

export const appNotificationState = atom({
  key: "appNotiifcationState",
  default: {},
});

export default notificationsState;
