import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { createUser, getOtp, getUsers, verifyOtp } from "../../services/api";
import { isAuthenticatedSelector } from "../selectors/userSelector";
import { appNotificationState } from "../state/notificationsState";
import userState, { usersState } from "../state/userState";

const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);
  const [users, setUsers] = useRecoilState(usersState);
  

  console.log("👧 User", user);

  const generateOtp = async () => {
    const res = await getOtp(user.phone);
    if (res?.Details) {
      setUser({ ...user, sessionId: res.Details });
    }
  };

  const verifyOtpCode = async () => {
    const res = await verifyOtp(user.sessionId, user.otp);
    if (res?.Details) {
      if (users && users.length > 0) {
        const new_user = users.find((u) => u.external_id === user.phone);
        if (new_user) {
          setUser({ ...new_user, verified: true });
        } else {
          setUser({ ...user, verified: true });
        }
      }
    }
  };

  const fetchUsers = async () => {
    const all_users = await getUsers();
    setUsers(all_users);
  };

  const createNewUser = async () => {
    const new_user = await createUser(user);
    setUser({ ...user, ...new_user });
  };

  React.useEffect(() => {
    if (!user.verified) {
      if (!user.sessionId) {
        //gen otp
        if (user.phone && user.phone.length === 10) {
          generateOtp();
        }
      } else {
        if (user.otp) {
          // verify otp
          verifyOtpCode();
        }
      }
    } else {
      if (!user.id) {
        //signup : create new user
        createNewUser();
      } else {
        //found user
        //setAppNotification({ title: `Welcome ${user.firstname}` });
      }
    }
  }, [user]);

  React.useEffect(() => {
    if (!users) {
      fetchUsers();
    }
  },[users]);

  return { user, isAuthenticated, setUser };
};

export default useUser;
