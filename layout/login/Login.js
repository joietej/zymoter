import React from 'react'
import { Form, TextInput, FormGroup } from "carbon-components-react";

const Login = ({sessionId, user,showSignupForm, onChange}) => {
    return (
        <Form>
        {showSignupForm ? (
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
    )
}

export default Login
