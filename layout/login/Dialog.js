import React from "react";
import { Modal, Form, TextInput } from "carbon-components-react";
import { getOtp, getUsers, verifyOtp, createUser } from "../../services/api";
import { useAppNotification } from "../../store/hooks/notifications";


const defaultUser = {
  phone: "",
  otp: "",
  authenticated: false,
  email: "",
  firstname: "",
  lastname: "",
};

const Dialog = ({ openDialog }) => {
  const [open, setOpen] = React.useState(false);
  const [sessionId, setSessionId] = React.useState(null);
  const [user, setUser] = React.useState(defaultUser);
  const [signup, setSignup] = React.useState(false);
  const[_, setAppNotification] = useAppNotification();

  React.useEffect(() => setOpen(openDialog), [openDialog]);

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
    setUser({ new_user, authenticated: true });
    setAppNotification({title :`Welcome ${new_user.firstname}`});
    reset();
    setOpen(false);
  }

  const onCancel = (e) => {
    e.preventDefault();
    if (sessionId) {
      reset();
    }
    setOpen(false);
  };

  const reset = () => {
    e.preventDefault();
    setSessionId(null);
    setUser(defaultUser);
    setSignup(false);
  };

  const onChange = (e) => {
    e.preventDefault();
    const new_user = {...user};
    new_user[e.target.name] = e.target.value; 
    setUser(new_user);
  }

  return (
    <Modal
      open={open}
      title="Checkout"
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
      hasScrollingContent
    >
      <Form>
        {signup ? (
          <>
            <TextInput
              name='firstname'
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
          </>
        ) : (
          <>
            <TextInput
              labelText="Phone Number"
              name="phone"
              value={user.phone}
              readOnly={!!sessionId}
              onChange={onChange}
            ></TextInput>
            {sessionId && (
              <TextInput
                labelText="OTP"
                name="otp"
                value={user.otp}
                onChange={onChange}
              ></TextInput>
            )}
          </>
        )}
      </Form>
    </Modal>
  );
};

export default Dialog;
