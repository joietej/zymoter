import { atom } from "recoil";

export const defaultUser = {
  phone: "",
  otp: "",
  authenticated: false,
  email: "",
  firstname: "",
  lastname: "",
};

const userState = atom({
  key: "userState",
  default: defaultUser,
});

export default userState;
