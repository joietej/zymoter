import { selector } from "recoil";
import userState from "../state/userState";


export const isAuthenticatedSelector = selector({
  key: "isAuthenticatedSelector",
  get: ({ get }) => {
    const user = get(userState);
    return user ? user.verified && user.id : false;
  },
});
