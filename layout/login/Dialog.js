import React from "react";
import { useSetRecoilState } from "recoil";
import { Modal } from "carbon-components-react";

import { defaultUser } from "../../store/state/userState";
import { appNotificationState } from "../../store/state/notificationsState";

import { useLoginDialog } from "../../store/hooks/dialogs";
import useUser from "../../store/hooks/user";
import useOtp from "../../store/hooks/otp";
import useSignup from "../../store/hooks/signup";

import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";

const Dialog = () => {
  const [isOpen, setIsOpen] = useLoginDialog();
  const { user, setUser, isAuthenticated } = useUser();
  const { sessionId, otp, setSessionId, setOtp } = useOtp();
  const { setSignup, signupRequest, setSignupRequest } = useSignup();

  const [userForm, setUserForm] = React.useState({ ...defaultUser, otp: "" });
  const [showSignupForm, setShowSignupForm] = React.useState(false);

  const setAppNotification = useSetRecoilState(appNotificationState);

  const onClose = () => setIsOpen(false);

  const onLogin = async (e) => {
    e.preventDefault();

    if (userForm.otp && sessionId && !otp) {
      setOtp(userForm.otp);
      return;
    }

    if (user.verified && !user.id) {
      setSignup(true);
      return;
    }

    !isAuthenticated ? setUser({ ...userForm }) : reset(true);
  };

  React.useEffect(() => {
    if (user.verified) {
      if (user.id) {
        setAppNotification({ title: `Welcome ${user.firstname}` });
        onClose();
        reset();
      } else {
        setShowSignupForm(true);
      }
    }
  }, [user]);

  const onCancel = (e) => {
    e.preventDefault();
    reset();
    onClose();
  };

  const reset = (logout = false) => {
    setUserForm({ ...defaultUser, otp: "" });
    if (logout) {
      setUser({ ...defaultUser });
    }
    setSignup(false);
    setOtp(null);
    setSessionId(null);
    setShowSignupForm(false);
  };

  const onChange = (e) => {
    e.preventDefault();

    if (!showSignupForm) {
      const new_user = { ...userForm };
      new_user[e.target.name] = e.target.value;
      setUserForm(new_user);
    } else {
      const new_req = { ...signupRequest };
      new_req[e.target.name] = e.target.value;
      setSignupRequest(new_req);
    }
  };

  const loginProps = {
    sessionId,
    user: userForm,
    onChange,
  };

  const title = isAuthenticated ? "Logout" : "Login";

  const primaryActionText = isAuthenticated
    ? "Log off"
    : showSignupForm
    ? "Sign Up"
    : sessionId
    ? "Verify"
    : "Generate OTP";

  return (
    <Modal
      open={isOpen}
      title={title}
      modalLabel={title}
      modalHeading={title}
      primaryButtonText={primaryActionText}
      secondaryButtonText="Cancel"
      onRequestSubmit={onLogin}
      onSecondarySubmit={onCancel}
      onRequestClose={onCancel}
      hasForm
      preventCloseOnClickOutside
    >
      {showSignupForm ? (
        <Signup signupRequest={signupRequest} onChange={onChange} />
      ) : isAuthenticated ? (
        <Logout />
      ) : (
        <Login {...loginProps} />
      )}
    </Modal>
  );
};

export default Dialog;
