import { atom } from "recoil";

const notificationsState = atom({
  key: "notificationsState",
  default: [{ title: "Test Notification" }],
});

export default notificationsState;
