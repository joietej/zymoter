import React from "react";

import { Modal } from "carbon-components-react";

import Checkout from "./Checkout";
import { useCheckoutDialog } from "../../store/hooks/dialogs";
import { mapToOrder } from "../../store/hooks/checkout";

import useUser from "../../store/hooks/user";
import useCheckout from "../../store/hooks/checkout";
import { defaultCheckout } from "../../store/state/checkoutState";
import useOrder from "../../store/hooks/order";
import Confirmation from "./confirmation";

const Dialog = () => {
  const [index, setIndex] = React.useState(0);

  const [isOpen, setIsOpen] = useCheckoutDialog();
  const { user, isAuthenticated } = useUser();
  const [checkout, setCheckout] = useCheckout();
  const { order, setOrder, confirmedOrder, setConfirmedOrder } = useOrder();

  React.useEffect(() => {
    if (isAuthenticated) {
      const { firstname, lastname, email } = user;
      const new_checkout = {
        ...checkout,
        firstname,
        lastname,
        email,
      };
      setCheckout(new_checkout);
    } else if (user.email) {
      setCheckout({ ...defaultCheckout });
    }
  }, [user, isAuthenticated]);

  const onChange = (e) => {
    e.preventDefault();
    const new_checkout = { ...checkout };
    new_checkout[e.target.name] = e.target.value;
    setCheckout(new_checkout);
  };

  const next = (e) => {
    e.preventDefault();
    if (index < 2) {
      setIndex(index + 1);
    } else if (!confirmedOrder) {
      const order = mapToOrder(checkout);
      setOrder(order);
    } else {
      setConfirmedOrder(null);
      setIsOpen(false);
    }
  };

  const previous = (e) => {
    e.preventDefault();
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Modal
      title="Checkout"
      modalLabel="1 Items"
      modalHeading="Checkout"
      open={isOpen}
      primaryButtonText={confirmedOrder ? "Ok" : index === 2 ? "Submit" : "Next"}
      secondaryButtonText={confirmedOrder ? "Close" : index === 0 ? "Cancel" : "Previous"}
      onRequestSubmit={next}
      onSecondarySubmit={previous}
      onRequestClose={() => setIsOpen(false)}
      hasForm
      preventCloseOnClickOutside
      hasScrollingContent
    >
      {confirmedOrder ? (
        <Confirmation confirmedOrder={confirmedOrder} />
      ) : (
        <Checkout index={index} checkout={checkout} onChange={onChange} />
      )}
    </Modal>
  );
};

export default Dialog;
