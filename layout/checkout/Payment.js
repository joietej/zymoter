import React from "react";
import {
  Form,
  FormGroup,
  TextInput,
  NumberInput,
} from "carbon-components-react";

const Payment = () => {
  return (
    <Form>
      <FormGroup>
        <TextInput labelText="Name" required />
        <TextInput labelText="Card Number" required />
        <NumberInput label="Expiry Month" required min={1} max={12} />
        <NumberInput label="Expiry Year" required min={2021} max={2030} />
        <NumberInput label="CCV" required min={0} max={999} />
      </FormGroup>
    </Form>
  );
};

export default Payment;
