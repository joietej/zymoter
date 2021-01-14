import { atom } from "recoil";

export const defaultUser = {
  id:null,
  phone: "",
  verified: false,
  email: "",
  firstname: "",
  lastname: "",
};

const userState = atom({
  key: "userState",
  default: defaultUser,
});

export const usersState = atom({
  key: "usersState",
  default: null,
});

export const sessionIdState = atom({
  key: "sessionIdState",
  default: null,
});

export const otpState = atom({
  key: "otpState",
  default: null,
});


export default userState;
