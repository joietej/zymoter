import { atom } from "recoil";
import { getUsers } from "../../services/api";

export const defaultUser = {
  id: null,
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
  default: [],
  effects: [
    async (x) => {
      const data = await getUsers();
      x.setSelf(data);
    },
  ],
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
