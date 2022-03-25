import { useRecoilState } from "recoil";
import userState from "../state/userState";

const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const isAuthenticated = user ? user.verified && user.id : false;
  return { user, isAuthenticated, setUser };
};

export default useUser;
