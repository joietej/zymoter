import { atom } from "recoil";

const notificationsState = atom({
  key: "notificationsState",
  default: [],
});

export const appNotificationState = atom({
  key: "appNotiifcationState",
  defualt: {},
});

export default notificationsState;
