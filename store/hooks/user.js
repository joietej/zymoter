import React from "react";
import { useRecoilState } from "recoil";
import userState from "../state/userState";

const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  return [user, setUser];
};

export default useUser;