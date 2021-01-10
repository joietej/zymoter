import React from "react";
import { Modal, Form, TextInput, FormGroup } from "carbon-components-react";
import { getOtp, getUsers, verifyOtp, createUser } from "../../services/api";
import { useAppNotification } from "../../store/hooks/notifications";
import { useLoginDialog } from "../../store/hooks/dialogs";
import useUser from "../../store/hooks/user";
import { defaultUser } from "../../store/state/userState";



const Dialog = () => {
  const [isOpen, setIsOpen] = useLoginDialog();
  const [_, setAppNotification] = useAppNotification();
  const [user, setUser] = useUser();

  const [sessionId, setSessionId] = React.useState(null);
  const [signup, setSignup] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const onLogin = async (e) => {
    e.preventDefault();
    if (signup) {
      const new_user = await createUser(user);
      onUserFound(new_user);
      return;
    }
    if (!sessionId) {
      const res = await getOtp(user.phone);
      setSessionId(res.Details);
    } else {
      try {
        await verifyOtp(sessionId, user.otp);
        const users = await getUsers();
        const new_user = users.find((u) => u.external_id === user.phone);
        if (new_user) {
          onUserFound(new_user);
        } else {
          setSignup(true);
        }
      } catch {
        reset();
      }
    }
  };

  const onUserFound = (new_user) => {
    setUser({ ...new_user, authenticated: true });
    setAppNotification({ title: `Welcome ${new_user.firstname}` });
    reset();
    onClose();
  };

  const onCancel = (e) => {
    e.preventDefault();
    if (sessionId) {
      reset();
    }
    onClose();
  };

  const reset = () => {
    setSessionId(null);
    setUser(defaultUser);
    setSignup(false);
  };

  const onChange = (e) => {
    e.preventDefault();
    const new_user = { ...user };
    new_user[e.target.name] = e.target.value;
    setUser(new_user);
  };

  return (
    <Modal
      open={isOpen}
      title="Login"
      modalLabel="Login"
      modalHeading="Login"
      primaryButtonText={
        signup ? "Sign Up" : sessionId ? "Verify" : "Generate OTP"
      }
      secondaryButtonText="Cancel"
      onRequestSubmit={onLogin}
      onSecondarySubmit={onCancel}
      onRequestClose={onCancel}
      hasForm
      preventCloseOnClickOutside
    >
      <Form>
        {signup ? (
          <FormGroup legendText="Your Information">
            <TextInput
              name="firstname"
              labelText="First Name"
              value={user.firstname}
              onChange={onChange}
            ></TextInput>
            <TextInput
              labelText="Last Name"
              name="lastname"
              value={user.lastlame}
              onChange={onChange}
            ></TextInput>
            <TextInput
              labelText="Email"
              name="email"
              value={user.email}
              onChange={onChange}
            ></TextInput>
          </FormGroup>
        ) : (
          <FormGroup legendText="OTP Verification">
            <TextInput
              labelText="Phone Number"
              name="phone"
              value={user.phone}
              readOnly={!!sessionId}
              onChange={onChange}
              type="tel"
              pattern="[0-9]{10}"
            ></TextInput>
            {sessionId && (
              <TextInput
                labelText="OTP"
                name="otp"
                value={user.otp}
                onChange={onChange}
              ></TextInput>
            )}
          </FormGroup>
        )}
      </Form>
    </Modal>
  );
};

export default Dialog;
