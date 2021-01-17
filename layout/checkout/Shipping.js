import React from "react";
import { Form, FormGroup, Select, TextInput } from "carbon-components-react";

const Shipping = ({ checkout, onChange }) => {
  return (
    <Form>
      <FormGroup legendText="Personal">
        <TextInput
          labelText="First Name"
          value={checkout.firstName}
          required
          onChange={onChange}
          name="firstname"
          id="firsttname"
        />
        <TextInput
          labelText="Last Name"
          value={checkout.lastName}
          required
          onChange={onChange}
          name="lastname"
          id="lastname"
        />
        <TextInput
          type="email"
          value={checkout.email}
          labelText="Email"
          required
          name="email"
          onChange={onChange}
          id="email"
        />
      </FormGroup>

      <FormGroup legendText="Address">
        <TextInput
          labelText="Street"
          id="street"
          name="street"
          required
          value={checkout.shippingStreet}
          onChange={onChange}
        />
        <TextInput labelText="City" required value={checkout.shippingCity} />
        <TextInput
          labelText="Postal / Zip Code"
          id="zip"
          name="zip"
          required
          value={checkout.shippingPostalZipCode}
          onChange={onChange}
        />
        <Select
          id="country"
          name="country"
          labelText="Country"
          value={checkout.shippingCountry}
          onChange={onChange}
        >
          <option disabled>Country</option>
          {checkout.shippingCountries.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })}
        </Select>
        <Select
          labelText="State"
          id="state"
          name="state"
          value={checkout.shippingStateProvince}
          onChange={onChange}
        >
          <option disabled>State/province</option>
          {checkout.shippingSubdivisions.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })}
        </Select>
      </FormGroup>

      <Select
        labelText="Shipping Method"
        id="shippingMethod"
        name="shippingMethod"
        value={checkout.shippingOption.id}
        onChange={onChange}
      >
        <option className="checkout__select-option" disabled>
          Select a shipping method
        </option>
        {checkout.shippingOptions.map((method, index) => {
          return (
            <option
              value={method.id}
              key={index}
            >{`${method.description} - ${method.price.formatted_with_code}`}</option>
          );
        })}
        ;
      </Select>
    </Form>
  );
};

export default Shipping;
