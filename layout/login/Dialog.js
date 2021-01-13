import React from "react";
import { Modal } from "carbon-components-react";
import { useLoginDialog } from "../../store/hooks/dialogs";
import useUser from "../../store/hooks/user";
import { defaultUser } from "../../store/state/userState";
import Login from "./Login";
import Logout from "./Logout";
import { appNotificationState } from "../../store/state/notificationsState";
import { useSetRecoilState } from "recoil";

const Dialog = () => {
  console.log("📢 Dialog");
  const [isOpen, setIsOpen] = useLoginDialog();
  const { user, setUser, isAuthenticated } = useUser();

  const [userForm, setUserForm] = React.useState({ ...defaultUser, otp: "" });
  const [showSignupForm, setShowSignupForm] = React.useState(false);

  const setAppNotification = useSetRecoilState(appNotificationState);

  const onClose = () => setIsOpen(false);

  const onLogin = async (e) => {
    e.preventDefault();
    !isAuthenticated ? setUser({ ...userForm }) : reset();
  };

  React.useEffect(() => {
    if (user.verified) {
      if (user.id) {
        setAppNotification({ title: `Welcome ${user.firstname}` });
        onClose();
      } else {
        setShowSignupForm(true);
      }
    }
  }, [user]);

  const onCancel = (e) => {
    e.preventDefault();
    //reset();
    onClose();
  };

  const reset = () => {
    setUserForm({ ...defaultUser, otp: "" });
    setUser({ ...defaultUser });
    setShowSignupForm(false);
  };

  const onChange = (e) => {
    e.preventDefault();
    const new_user = { ...userForm };
    new_user[e.target.name] = e.target.value;
    setUserForm(new_user);
  };

  const loginProps = {
    sessionId: user.sessionId,
    user: userForm,
    showSignupForm,
    onChange,
  };

  const title = isAuthenticated ? "Logout" : "Login";

  const primaryActionText = isAuthenticated
    ? "Log off"
    : showSignupForm
    ? "Sign Up"
    : user.sessionId
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
      {isAuthenticated ? <Logout /> : <Login {...loginProps} />}
    </Modal>
  );
};

export default Dialog;
