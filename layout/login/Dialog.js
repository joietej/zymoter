import React from "react";
import { Modal, Form, TextInput } from "carbon-components-react";
import { getOtp, getUsers, verifyOtp, createUser } from "../../services/api";
import { useAppNotification } from "../../store/hooks/notifications";


const defaultUser = {
  phone: "",
  otp: "",
  authenticated: false,
  email: "",
  firstName: "",
  lastName: "",
};

const Dialog = ({ openDialog }) => {
  const [open, setOpen] = React.useState(false);
  const [sessionId, setSessionId] = React.useState(null);
  const [user, setUser] = React.useState(defaultUser);
  const [signup, setSignup] = React.useState(false);
  const[_, setAppNotification] = useAppNotification();

  React.useEffect(() => setOpen(openDialog), [openDialog]);

  const onLogin = async () => {
    if (signup) {
      const new_user = await createUser(user);
      setUser({ new_user, authenticated: true });  
      setAppNotification({ title :`Welcome ${user.firstName}`});
      reset();
      setOpen(false);
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
          setUser({ new_user, authenticated: true });
          setAppNotification({title :`Welcome ${user.firstName}`});
          reset();
          setOpen(false);
        } else {
          setSignup(true);
        }
      } catch {
        reset();
      }
    }
  };

  const onCancel = () => {
    if (sessionId) {
      reset();
    }
    setOpen(false);
  };

  const reset = () => {
    setSessionId(null);
    setUser(defaultUser);
    setSignup(false);
  };

  return (
    <Modal
      open={open}
      title="Checkout"
      modalLabel="Login"
      modalHeading="Phone Number Verification"
      primaryButtonText={
        signup ? "Sign Up" : sessionId ? "Verify" : "Generate OTP"
      }
      secondaryButtonText="Cancel"
      onRequestSubmit={onLogin}
      onSecondarySubmit={() => onCancel()}
      onRequestClose={() => setOpen(false)}
      hasForm
      preventCloseOnClickOutside
      hasScrollingContent
    >
      <Form>
        {signup ? (
          <>
            <TextInput
              labelText="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            ></TextInput>
            <TextInput
              labelText="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            ></TextInput>
            <TextInput
              labelText="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></TextInput>
          </>
        ) : (
          <>
            <TextInput
              labelText="PhoneNumber"
              value={user.phone}
              readOnly={!!sessionId}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            ></TextInput>
            {sessionId && (
              <TextInput
                labelText="OTP"
                value={user.otp}
                onChange={(e) => setUser({ ...user, otp: e.target.value })}
              ></TextInput>
            )}
          </>
        )}
      </Form>
    </Modal>
  );
};

export default Dialog;
