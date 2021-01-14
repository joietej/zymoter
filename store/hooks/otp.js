import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getOtp, verifyOtp } from "../../services/api";
import userState, {
  sessionIdState,
  otpState,
  usersState,
} from "../state/userState";

const useOtp = () => {
  const [user, setUser] = useRecoilState(userState);
  const [otp, setOtp] = useRecoilState(otpState);
  const [sessionId, setSessionId] = useRecoilState(sessionIdState);
  const users = useRecoilValue(usersState);

  React.useEffect(() => {
    if (
      !user.verified &&
      !sessionId &&
      user.phone &&
      user.phone.length === 10
    ) {
      //gen otp
      console.debug("generating otp");
      const generateOtp = async () => {
        if (sessionId) return;
        const res = await getOtp(user.phone);
        if (res?.Details) {
          setSessionId(res.Details);
        }
      };
      generateOtp();
    }
  }, [user.verified, user.phone, sessionId]);

  React.useEffect(() => {
    if (!user.verified && sessionId && otp) {
      // verify otp
      console.debug("verifying otp");
      const verifyOtpCode = async () => {
        const res = await verifyOtp(sessionId, otp);
        if (res?.Details) {
          const new_user =
            users.length && users.find((u) => u.external_id === user.phone);
          if (new_user) {
            setUser({ ...new_user, verified: true });
          } else {
            setUser({ ...user, verified: true });
          }
          setSessionId(null);
          setOtp(null);
        }
      };
      verifyOtpCode();
    }
  }, [user.verified, sessionId, otp]);

  return { sessionId, otp, setOtp, setSessionId };
};

export default useOtp;
