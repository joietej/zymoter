import { atom } from "recoil";

const checkoutDialogState = atom({
  key: "checkoutState",
  default: false,
});

export default checkoutDialogState;