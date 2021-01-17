import { atom } from "recoil";

export const defaultCheckout = {
  checkoutToken: null,
  // Customer details
  firstName: "Gabbar",
  lastName: "Singh",
  email: "gabbu@email.com",
  // Shipping details
  shippingName: "Gabbar Singh",
  shippingStreet: "123 Fake St",
  shippingCity: "Rampur",
  shippingStateProvince: "",
  shippingPostalZipCode: "94107",
  shippingCountry: "",
  // Payment details
  cardNum: "4242 4242 4242 4242",
  expMonth: "11",
  expYear: "2023",
  ccv: "123",
  billingPostalZipcode: "94107",
  // Shipping and fulfillment data
  shippingCountries: [],
  shippingSubdivisions: [],
  shippingOptions: [],
  shippingOption: { id: "" },
};

export const checkoutDialogState = atom({
  key: "checkoutDialogState",
  default: false,
});

const checkoutState = atom({
  key: "checkoutState",
  default: defaultCheckout,
});

export default checkoutState;
