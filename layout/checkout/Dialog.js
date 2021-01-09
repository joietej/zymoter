import React from "react";
import { useRecoilState } from "recoil";

import { Modal } from "carbon-components-react";

import checkoutDialogState from "../../store/state/checkoutState";
import Checkout from "./Checkout";

const Dialog = () => {
  const [isOpen, setIsOpen] = useRecoilState(checkoutDialogState);
  const [index, setIndex] = React.useState(0);

  const next = (e) => {
    e.preventDefault();
    if (index < 2) {
      setIndex(index + 1);
    } else {
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
      primaryButtonText={index === 2 ? "Submit" : "Next"}
      secondaryButtonText={index === 0 ? "Cancel" : "Previous"}
      onRequestSubmit={next}
      onSecondarySubmit={previous}
      onRequestClose={() => setIsOpen(false)}
      hasForm
      preventCloseOnClickOutside
      hasScrollingContent
    >
      <Checkout index={index} />
    </Modal>
  );
};

export default Dialog;
