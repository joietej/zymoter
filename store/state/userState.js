import { atom } from "recoil";

export const defaultUser = {
  id:null,
  phone: "",
  verified: false,
  email: "",
  firstname: "",
  lastname: "",
  otp: null,
  sessionId: null
};

const userState = atom({
  key: "userState",
  default: defaultUser,
});

export const usersState = atom({
  key: "usersState",
  default: null,
});


export default userState;
