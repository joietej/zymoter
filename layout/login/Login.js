import React from "react";
import { Form, TextInput, FormGroup } from "carbon-components-react";

const Login = ({ sessionId, user, onChange }) => {
  return (
    <Form>
      <FormGroup legendText="OTP Verification">
        <TextInput
          id="phone"
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
            id="otp"
            labelText="OTP"
            name="otp"
            value={user.otp}
            onChange={onChange}
          ></TextInput>
        )}
      </FormGroup>
    </Form>
  );
};

export default Login;
