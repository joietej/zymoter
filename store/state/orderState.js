import { atom } from "recoil";

const defaultOrder = {
  line_items: [],
  customer: {
    firstname: "",
    lastname: "",
    email: "",
  },
  shipping: {
    address: {
      name: "",
      street: "",
      town_city: "",
      postal_zip_code: "",
      country: "",
      county_state: "",
    },
  },
  fulfillment: {
    shipping_method: "",
  },
  payment: {
    gateway: "",
    card: {
      number: "",
      expiry_month: "",
      expiry_year: "",
      cvc: "",
      postal_zip_code: "",
    },
  },
};

const orderState = atom({
  key: "orderState",
  default: defaultOrder,
});

export default orderState;
