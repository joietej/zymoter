import React from "react";
import { Form, FormGroup, Select, TextInput } from "carbon-components-react";
import useUser from "../../store/hooks/user";

const defaultOrder = {
  shipping: {
    firstname: "",
    lastname: "",
    email: "",
    address: {
      street: "",
      city: "",
      zip: "",
      country: "",
      state: "",
    },
    method: "",
  },
};

const Shipping = () => {
  const [user, setUser] = useUser();
  const [order, setOrder] = React.useState(defaultOrder);

  React.useEffect(() => {
    if (user.isAuthenticated) {
      const { firstname, lastname, email } = user;
      const new_order = {
        ...order,
        shipping: { ...order.shipping, firstname, lastname, email },
      };
      setOrder(new_order);
    }
  }, []);

  const onChange = (e) => {
    e.preventDefault();
    const new_order = { ...order };
    new_order.shipping[e.target.name] = e.target.value;
    setOrder(new_order);
  };

  return (
    <Form>
      <FormGroup legendText="Personal">
        <TextInput
          labelText="First Name"
          value={order.shipping.firstname}
          required
          onChange={onChange}
          name="firstname"
        />
        <TextInput
          labelText="Last Name"
          value={order.shipping.lastname}
          required
          onChange={onChange}
          name="lastname"
        />
        <TextInput
          type="email"
          labelText="Email"
          required
          name="email"
          onChange={onChange}
        />
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
