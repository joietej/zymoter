import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import checkoutState from "../../store/state/checkoutState";
import cartState from "../../store/selectors/cartSelector";
import commerce from "../../lib/commerceClient";


export const mapToOrder = (checkout) => {
  const orderData = {
    line_items:checkout.checkoutToken.live.line_items,
    customer: {
      firstname:checkout.firstName,
      lastname:checkout.lastName,
      email:checkout.email,
    },
    shipping: {
      name:checkout.shippingName,
      street:checkout.shippingStreet,
      town_city:checkout.shippingCity,
      county_state:checkout.shippingStateProvince,
      postal_zip_code:checkout.shippingPostalZipCode,
      country:checkout.shippingCountry,
    },
    fulfillment: {
      shipping_method:checkout.shippingOption.id
    },
    payment: {
      gateway: "test_gateway",
      card: {
        number:checkout.cardNum,
        expiry_month:checkout.expMonth,
        expiry_year:checkout.expYear,
        cvc:checkout.ccv,
        postal_zip_code:checkout.billingPostalZipcode,
      },
    },
  };
  return orderData;
}

const useCheckout = () => {
  const [checkout, setCheckout] = useRecoilState(checkoutState);
  const cart = useRecoilValue(cartState);

  React.useEffect(() => {
    console.debug("cart", cart);
    if (cart && cart.line_items.length && !checkout.checkoutToken) {
      commerce.checkout
        .generateToken(cart.id, { type: "cart" })
        .then((token) => {
          console.debug("token", token);
          setCheckout({ ...checkout, checkoutToken: token });
        })
        .catch((error) => {
          console.log("There was an error in generating a token", error);
        });
    }
  }, [cart?.line_items.length, cart?.id, checkout?.checkoutToken]);

  React.useEffect(() => {
    if (checkout.checkoutToken && !checkout.shippingCountries.length) {
      commerce.services
        .localeListShippingCountries(checkout.checkoutToken.id)
        .then((countries) => {
          var values = Object.keys(countries.countries) || [];
          setCheckout({
            ...checkout,
            shippingCountries: values,
            shippingCountry: values.length ? values[0] : "",
          });
        })
        .catch((error) => {
          console.log(
            "There was an error fetching a list of shipping countries",
            error
          );
        });
    }
  }, [checkout.checkoutToken]);

  React.useEffect(() => {
    if (
      checkout &&
      checkout.checkoutToken &&
      checkout.shippingCountry &&
      !checkout.shippingOptions.length
    ) {
      commerce.checkout
        .getShippingOptions(checkout.checkoutToken.id, {
          country: checkout.shippingCountry,
          region: checkout.shippingStateProvince,
        })
        .then((options) => {
          const shippingOption = options[0] || null;
          setCheckout({
            ...checkout,
            shippingOptions: options,
            shippingOption: shippingOption,
          });
        })
        .catch((error) => {
          console.log(
            "There was an error fetching the shipping methods",
            error
          );
        });
    }
  }, [
    checkout.checkoutToken,
    checkout.shippingCountry,
    checkout.shippingStateProvince,
  ]);

  React.useEffect(() => {
    if (checkout && checkout.shippingCountry) {
      commerce.services
        .localeListSubdivisions(checkout.shippingCountry)
        .then((subdivisions) => {
          var values = Object.keys(subdivisions.subdivisions) || [];
          setCheckout({
            ...checkout,
            shippingSubdivisions: values,
            shippingStateProvince: values.length ? values[0] : "",
          });
        })
        .catch((error) => {
          console.log("There was an error fetching the subdivisions", error);
        });
    }
  }, [checkout.shippingCountry]);

  return [checkout, setCheckout];
};

export default useCheckout;
