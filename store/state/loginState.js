import { atom } from "recoil";

const loginDialogState = atom({
  key: "loginState",
  default: false,
});

export default loginDialogState;