import React from "react";
import { useRecoilState } from "recoil";
import { getUsers } from "../../services/api";
import userState, { usersState } from "../state/userState";

const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const [users, setUsers] = useRecoilState(usersState);

  const isAuthenticated = user ? user.verified && user.id : false;

  React.useEffect(() => {
    if (!users) {
      const fetchUsers = async () => {
        const all_users = await getUsers();
        setUsers(all_users);
      };
      fetchUsers();
    }
  }, [users]);

  return { user, isAuthenticated, setUser };
};

export default useUser;
