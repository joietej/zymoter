import React from "react";
import { Form, FormGroup, Select, TextInput } from "carbon-components-react";

const Shipping = () => {
  return (
    <Form>
      <FormGroup legendText="Personal">
        <TextInput labelText="Full Name" required />
        <TextInput type="email" labelText="Email" required />
      </FormGroup>

      <FormGroup legendText="Address">
        <TextInput labelText="Street" required />
        <TextInput labelText="City" required />
        <TextInput labelText="Postal / Zip Code" required />
        <Select labelText="Country" />
        <Select labelText="State" />
      </FormGroup>

      <Select labelText="Shipping Method" />
    </Form>
  );
};

export default Shipping;
