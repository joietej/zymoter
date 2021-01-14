import React from "react";
import { useRecoilState } from "recoil";
import { createUser } from "../../services/api";
import userState from "../state/userState";

const useSignup = () => {
  const [user, setUser] = useRecoilState(userState);
  const [signup, setSignup] = React.useState(false);
  const [signupRequest, setSignupRequest] = React.useState({
    firsname: "",
    lastname: "",
    email: "",
    external_id: ''
  });

  React.useEffect(() => {
    if (signup && !user.id && user.verified) {
      //signup : create new user
      console.debug("sign up");
      const createNewUser = async () => {
        const new_user = await createUser({...signupRequest, external_id: user.phone});
        setUser({ ...user, ...new_user });
      };
      createNewUser();
    }
  }, [signup, user.verified, user.id]);

  return {signup, setSignup, signupRequest, setSignupRequest};
};

export default useSignup;
