import React from "react";
import { Form, TextInput, FormGroup } from "carbon-components-react";

const Signup = ({signupRequest, onChange}) => {
  return (
    <Form>
      <FormGroup legendText="Your Information">
        <TextInput
          id="lastname"
          name="firstname"
          labelText="First Name"
          value={signupRequest.firstname}
          onChange={onChange}
        ></TextInput>
        <TextInput
          id="lastname"
          labelText="Last Name"
          name="lastname"
          value={signupRequest.lastname}
          onChange={onChange}
        ></TextInput>
        <TextInput
          id="email"
          labelText="Email"
          name="email"
          value={signupRequest.email}
          onChange={onChange}
        ></TextInput>
      </FormGroup>
    </Form>
  );
};

export default Signup;
